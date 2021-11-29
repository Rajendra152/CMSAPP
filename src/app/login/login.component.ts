
/**
 * @description The below code is used to display about the details of the login page of application
 * importing Component,OnInit from '@angular/core';
 * importing html and css from the login component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { UserModel } from '../shared/model/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

/**
 * @Params Creating the class LoginComponent and exporting it
 */

export class LoginComponent implements OnInit {
  public data = {
  email : '',
  password : '',
  }

  valid = {
    email: true,
    password: true,
  };

  public loginObj = new UserModel();
  constructor(private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {}
  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;

    if (type === 'email') {
      this.valid.email = emailPattern.test(this.data.email);
    }
  }

  //onkey function
  onkey(event: any, type: string) {
    if (type === 'email') {
      this.data.email = event.target.value;
    }
    this.validate(type)
  }

  Login() {
    const formData = new FormData();
    formData.append("Email",this.data.email)
    formData.append("Password",this.data.password)
    console.log(this.loginObj)
    this.api.Login(formData)
      .subscribe(res => {
        alert("success");
      })
  }
}
