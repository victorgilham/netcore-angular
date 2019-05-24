import { User } from './../_models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  private api = environment.api;

  getUsers = (): Observable<User[]> => {
    return this.http.get<User[]>(this.api + 'users');
  };

  getUser = (id: number): Observable<User> => {
    return this.http.get<User>(this.api + 'users/' + id);
  };

  updateUserInfo = (id: number, user: User) => {
    return this.http.put(this.api + 'users/' + id, user);
  };
}
