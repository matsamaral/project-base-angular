import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  public login(token: string): boolean {
    localStorage.setItem('token', btoa(token));

    return true;
  }

  public logout(): boolean {
    localStorage.removeItem('token');

    return true;
  }
}
