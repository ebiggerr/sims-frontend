import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( private authService: NbAuthService, private router: Router) {}

  canActivate() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if ( !token.isValid() ) {
          // TODO update this implementation after completed developing
          // this.router.navigate(['auth/login']);
          return true;
        }
      });
    return true;
  }
}
