import { AlertService } from './../_services/alert.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.loggedIn()) return true;
    this.alertService.error('Access denied');
    this.router.navigate(['/home']);
    return false;
  }
}
