import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://localhost:44390/api/auth/';
  private jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  login = (model: any) => {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const userToken = response;
        if (userToken) {
          localStorage.setItem('token', userToken.token);
          this.decodedToken = this.jwtHelper.decodeToken(userToken.token);
        }
      })
    );
    // tslint:disable-next-line: semicolon
  };

  register = (model: any) => this.http.post(this.authUrl + 'register', model);

  loggedIn = () => {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  };
}
