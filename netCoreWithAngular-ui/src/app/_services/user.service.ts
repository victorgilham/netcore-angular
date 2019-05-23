import { User } from './../_models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  private api = environment.api;

  getUsers = (): Observable<User[]> => {
    return this.http.get<User[]>(this.api + 'users', httpOptions);
  };

  getUser = (id: number): Observable<User> => {
    return this.http.get<User>(this.api + 'users/' + id, httpOptions);
  };
}
