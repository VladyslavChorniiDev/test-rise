import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { DEFAULT_TIME } from './constants/verify-popup.constant';

@Component({
  selector: 'app-verify-popup',
  templateUrl: './verify-popup.component.html',
  styleUrls: ['./verify-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyPopupComponent implements OnInit, OnDestroy {
  public btnColor: EButtonColor = EButtonColor.blue;
  public btnSize: EButtonSize = EButtonSize.big;
  public code: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6}$/)])
  private destroy$: Subject<void> = new Subject<void>();
  public time: number = DEFAULT_TIME;
  public successfullySent: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private matDialogRef: MatDialogRef<VerifyPopupComponent>,
    private authService: AuthService
  ) {
    matDialogRef.addPanelClass('profile-creating-popup');
  }

  public ngOnInit(): void {
    this.startTimer();

    this.code.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => this.closeNotification());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public close(isCorrect?: boolean): void {
    this.matDialogRef.close(isCorrect);
  }

  public closeNotification(): void {
    this.successfullySent = false;
  }

  public validate(): void {
    if (this.code.invalid) return;

    this.authService.verify(this.code.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe((result: boolean) => {
      if (result) {
        this.close(true);
      } else {
        this.code.reset();
      }
    });
  }

  public startAgain(): void {
    this.successfullySent = true;
    this.time = DEFAULT_TIME;
    this.startTimer();
  }

  private startTimer(): void {
    timer(1000, 1000)
      .pipe(
        takeWhile(() => this.time > 0),
        tap(() => {
          this.time--
          this.cdr.markForCheck();
        }),
        takeUntil(this.destroy$)
      ).subscribe();
  }
}
