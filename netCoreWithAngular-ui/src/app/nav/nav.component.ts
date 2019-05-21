import { AlertService } from './../_services/alert.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private model: any = {};

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {}

  login = () => {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertService.success('Logged in succesfully');
      },
      error => {
        this.alertService.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
    // tslint:disable-next-line: semicolon
  };

  loggedIn = () => {
    return this.authService.loggedIn();
    // tslint:disable-next-line: semicolon
  };

  logout = () => {
    localStorage.removeItem('token');
    this.alertService.message('Logged out');
    this.router.navigate(['/home']);

    // tslint:disable-next-line: semicolon
  };
}
