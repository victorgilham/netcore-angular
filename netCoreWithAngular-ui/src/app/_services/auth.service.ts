import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'https://localhost:44390/api/auth/';

  constructor(private http: HttpClient) {}

  login = (model: any) => {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const userToken = response;
        if (userToken) {
          localStorage.setItem('token', userToken.token);
        }
      })
    );
    // tslint:disable-next-line: semicolon
  };

  register = (model: any) => this.http.post(this.authUrl + 'register', model);
}
