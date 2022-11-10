import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-profile-creating-popup',
  templateUrl: './profile-creating-popup.component.html',
  styleUrls: ['./profile-creating-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCreatingPopupComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private matDialogRef: MatDialogRef<ProfileCreatingPopupComponent>,
  ) {
    matDialogRef.addPanelClass('profile-creating-popup');
  }

  public ngOnInit(): void {
    timer(5000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => this.close());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public close(): void {
    this.matDialogRef.close();
  }

}
