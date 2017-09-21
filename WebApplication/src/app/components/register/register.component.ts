import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService,ValidateService]
})
export class RegisterComponent implements OnInit {
  name :string;
  username :string;
  email :string;
  password :string;

  constructor(private validateService : ValidateService, private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onRegistration(){
    const user = {
      name : this.name,
      username : this.username,
      email : this.email,
      password : this.password
    }

    if(!this.validateService.validateRegister(user)){
      console.log('Please fill all the fields');
    }else{
    this.authService.registerUser(user).subscribe(data => {
        if(data.success){
            this.router.navigate(['/login']);
        }else{
        console.log('registration failed!');
        }
      });
    }

  }

}
