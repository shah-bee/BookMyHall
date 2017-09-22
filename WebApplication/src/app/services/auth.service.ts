import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) {

  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/register', user, {
      headers: headers
    }).map(res => res.json());
  }

  onLogin(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/authenticate', user, {
      headers: headers
    }).map(res => res.json());
  }

  getUserProfile(token) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);

    return this.http.post('http://localhost:3000/users/profiles', {
      headers: headers
    }).map(res => res.json());


  }
}
