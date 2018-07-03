import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return isAuthenticated;
    } else {
      this.router.navigate(['signin']);
    }
  }
}
