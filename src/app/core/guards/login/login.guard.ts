import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {


  }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isLogged: boolean = this.authService.isLogged();

    if (!isLogged) {
      return true;
    }

    this.router.navigateByUrl('/');
    return false;
  }
}
