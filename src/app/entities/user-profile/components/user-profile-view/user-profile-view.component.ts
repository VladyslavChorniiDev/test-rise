import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '@services/user.service';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { ETitleSize } from '@shared/title/enums/title.enum';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileViewComponent {
  public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;
  public btnColor: EButtonColor = EButtonColor.lightGray;
  public titleSize: ETitleSize = ETitleSize.big;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public navigateToEdit(): void {
    this.router.navigateByUrl('profile/edit')
  }

}
