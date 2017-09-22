import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authService: AuthService, private router: Router, private storages: LocalStorageService) { }

  ngOnInit() {
  }

  onLogin() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.onLogin(user).subscribe(data => {
      if (data.success) {
        this.storages.add("token", data.token);
        this.router.navigate(['/profile', 
           12
        ]);
      }
    })

  }
}
