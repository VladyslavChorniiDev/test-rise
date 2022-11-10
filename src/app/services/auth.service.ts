import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DEFAULT_CODE } from '@entities/registration/constants/registration.constant';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService
  ) { }

  public verify(code: string): Observable<boolean> {
    return of(code === DEFAULT_CODE);
  }

  public login(user: IUser): void {
    this.userService.saveUser(user)
  }

  public logout(): void {
    this.userService.removeUser();
  }
}
