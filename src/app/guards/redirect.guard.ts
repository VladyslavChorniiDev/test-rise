import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class RedirectGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('user');

    if (isAuthenticated) {
      this.router.navigateByUrl('/profile');
    }

    return true;
  }
}