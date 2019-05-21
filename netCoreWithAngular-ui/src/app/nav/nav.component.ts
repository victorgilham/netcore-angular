import { AlertService } from './../_services/alert.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private model: any = {};

  constructor(
    public authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  login = () => {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertService.success('Logged in succesfully');
      },
      error => {
        this.alertService.error(error);
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
    // tslint:disable-next-line: semicolon
  };
}
