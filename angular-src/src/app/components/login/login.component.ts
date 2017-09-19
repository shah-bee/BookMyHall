import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AuthService } from "app/services/auth.service";
import { User } from "app/models/user";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, User]
})


export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private http: Http, private authService: AuthService,private router: Router) { }

  ngOnInit() {

  }

  onLogin() {

    const user = {
      username : this.username,
      password: this.password
    }

    this.authService.loginUser(user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/dashboard']);
      } else {
        console.log('registration failed!');
      }
    });
  }

}

