import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;
	public isShowMobileMenu: boolean = false;
	public btnSize: EButtonSize = EButtonSize.medium;
	public btnColor: EButtonColor = EButtonColor.darkGray;

	constructor(
		private userService: UserService,
		private authService: AuthService,
		private router: Router
	) { }

	public toggleMobileMenu(): void {
		this.isShowMobileMenu = !this.isShowMobileMenu;
	}

	public onLogout(): void {
		this.authService.logout();
		this.router.navigateByUrl('/registration');
	}
}