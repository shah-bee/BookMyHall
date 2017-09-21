import { Component, OnInit } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
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
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onLogin() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.onLogin(user).subscribe(data => {
      if(data.success){
        this.router.navigate(['/dashboard']);
      }
    })

  }
}
