import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "angular-2-local-storage/dist";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any;

  sub :any;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private storages: LocalStorageService) { }

  ngOnInit() {

  this.sub = this.route.params.subscribe( p => {
          console.log(p['id']);
        //return this.getProfile();
      })
      
  }

  getProfile() {
    this.authService.getUserProfile(this.storages.get("token")).subscribe(data => {
      if (data.success) {
        this.profiles = data;
      }
    })

  }
}
