import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  // login() {
  //   console.log(this, 'This');
  //   console.log(this.model);
  // }

  login = () => {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in');
      },
      error => {
        console.log(error, 'Error to login');
      }
    );
    // tslint:disable-next-line: semicolon
  };

  loggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
    // tslint:disable-next-line: semicolon
  };

  logout = () => {
    localStorage.removeItem('token');
    console.log('logged out');
    // tslint:disable-next-line: semicolon
  };
}
