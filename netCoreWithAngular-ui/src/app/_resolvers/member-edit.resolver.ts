import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './../_services/auth.service';
import { UserService } from './../_services/user.service';
import { User } from './../_models/user';
import { AlertService } from '../_services/alert.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  /**
   *
   */
  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) {}
  resolve = (route: ActivatedRouteSnapshot): Observable<User> => {
    return this.userService
      .getUser(this.authService.decodedToken.nameid[0])
      .pipe(
        catchError(error => {
          this.alertService.error(error);
          this.router.navigate(['/members']);
          return of(null);
        })
      );
  };
}
