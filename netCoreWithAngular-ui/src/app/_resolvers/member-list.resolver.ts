import { UserService } from './../_services/user.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from './../_models/user';
import { AlertService } from '../_services/alert.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  /**
   *
   */
  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {}
  resolve = (route: ActivatedRouteSnapshot): Observable<User[]> => {
    return this.userService.getUsers().pipe(
      catchError(error => {
        this.alertService.error(error);
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  };
}
