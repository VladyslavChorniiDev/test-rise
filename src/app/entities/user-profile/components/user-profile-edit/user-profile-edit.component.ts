import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from '@services/alert.service';
import { UserService } from '@services/user.service';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileEditComponent {
  public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  public update(user: IUser): void {
    this.userService.updateUser(user);
    this.alertService.onSuccess('Profile updated successfully');
    this.router.navigateByUrl('profile/view');
  }
}
