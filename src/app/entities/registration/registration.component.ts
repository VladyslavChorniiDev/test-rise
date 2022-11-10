import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, Subject, switchMap, takeUntil } from 'rxjs';
import { IBreadcrumb } from '@shared/title/interfaces/breadcrumb.interface';
import { AuthService } from '@services/auth.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { REGISTRATION_BREADCRUMBS } from './constants/registration.constant';
import { ProfileCreatingPopupComponent } from './popups/profile-creating-popup/profile-creating-popup.component';
import { VerifyPopupComponent } from './popups/verify-popup/verify-popup.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnDestroy {
  public registrationBreadcrumbs: IBreadcrumb[] = REGISTRATION_BREADCRUMBS;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public save(user: IUser): void {
    this.matDialog.open(VerifyPopupComponent).afterClosed().pipe(
      filter((result: boolean) => result),
      map(() => this.authService.login(user)),
      switchMap(() => this.matDialog.open(ProfileCreatingPopupComponent).afterClosed()),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigateByUrl('/profile')
    })
  }
}
