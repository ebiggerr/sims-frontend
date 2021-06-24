import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {NbAuthService} from '@nebular/auth';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( private authService: NbAuthService, private router: Router) {}

  canActivate() {
    return true;
    // TODO change the implementation, check localStorage for JWT token and navigate user depends on the result
    /*return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );*/
  }
}
