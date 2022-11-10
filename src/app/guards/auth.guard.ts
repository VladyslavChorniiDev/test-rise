import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router
	) { }

	canActivate(): boolean {
		const isAuthenticated = !!localStorage.getItem('user');

		if (!isAuthenticated) {
			this.router.navigateByUrl('/registration');
			return false;
		}

		return true;
	}
}