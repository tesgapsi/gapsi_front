import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {WelcomeServiceService,Info} from '../service/welcome-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'fuse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [WelcomeServiceService]
})
export class FuseLoginComponent implements OnInit {
  private irDashboard = false;
  loginForm: FormGroup;
  loginFormErrors: any;
  welcome:String;
  info: Info;
  constructor(
    private formBuilder: FormBuilder,
    private _welcomeService: WelcomeServiceService,
    private _router: Router
  ) {
    

    this.loginFormErrors = {
      usuario: {},
      password: {}
    };
  }

  ngOnInit() {
    this._welcomeService.welcome().subscribe((res) => {
      console.log("resp:  ",res)
    this.welcome=res

    });

    this._welcomeService.infoSystem().subscribe((res) => {
    this.info=res;
    

    });
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  providerList(event :Event) {

    event.preventDefault();
    this._router.navigate(["provider-list"]);
    
  }

}

