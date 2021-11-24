
/**
 * @description The below code is used to display about the details of the login page of application
 * importing Component,OnInit from '@angular/core';
 * importing html and css from the login component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

/**
 * @Params Creating the class LoginComponent and exporting it
 */

export class LoginComponent implements OnInit {
  email = '';

  valid = {
    email: true,
  };

  constructor() {}

  ngOnInit(): void {}
  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;

    if (type === 'email') {
      this.valid.email = emailPattern.test(this.email);
    }
  }

  //onkey function
  onkey(event: any, type: string) {
    if (type === 'email') {
      this.email = event.target.value;
    }
    this.validate(type)
  }
}
