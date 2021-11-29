
/**
 * @description The below code is used to display about the details of the signup page of application
 * importing Component,OnInit from '@angular/core';
 * importing html and css from the signup component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { UserModel } from '../shared/model/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})


/**
 * @Params Creating the class SignupComponent and exporting it
 */

export class SignupComponent implements OnInit {
  public data = {
  firstname : "",
  lastname : "",
  email : "",
  mobileno : "",
  password : "",
  confirmPassword : "",
  }

  valid = {
  firstname : true,
  lastname : true,
  email : true,
  mobileno : true,
  password : true,
  confirmPassword : true,
  }

  public signupObj = new UserModel();
  constructor(private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }
  //validation part
  validate(type: string): void {
    const usernamePattern = /^[a-zA-Z]+$/
    const emailPattern = /\S+@\S+\.\S+/;
    const mobilePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (type === 'firstname') {
      if (this.data.firstname.length < 3 || this.data.firstname.length>=10) {
        this.valid.firstname = false;
      } else {
        this.valid.firstname = usernamePattern.test(this.data.firstname);
      }
    }
    else if(type === "lastname"){
      if(this.data.lastname.length<3 || this.data.lastname.length>=10){
        this.valid.lastname = false;
      }else{
        this.valid.lastname = usernamePattern.test(this.data.lastname)
      }
    } else if(type === "mobileno"){
      if(this.data.mobileno.length<10 || this.data.mobileno.length>10){
        this.valid.mobileno = false
      }else{
          this.valid.mobileno = mobilePattern.test(this.data.mobileno)
      }
    }
     else if (type === 'email') {
      this.valid.email = emailPattern.test(this.data.email);
    } else if (type === ('confirmPassword' || 'password')) {
      if (this.data.password !== this.data.confirmPassword) {
        this.valid.password = false;
      } else {
        this.valid.password = true;
      }
    }
  }

  //onkey function
    onkey(event:any , type:string){
      if(type === 'firstname'){
       this.data.firstname = event.target.value;
      }else if(type==="lastname"){
        this.data.lastname = event.target.value;
      }else if( type === "email"){
        this.data.email = event.target.value;
      }else if (type === "password"){
        this.data.password = event.target.value;
      }else if (type === "confirmPassword"){
        this.data.confirmPassword = event.target.value;
      }else if (type === "mobileno"){
        this.data.mobileno = event.target.value;
      }
      this.validate(type)
    }

    Signup() {
      const formData = new FormData();
      formData.append("Firstname",this.data.firstname)
      formData.append("Lastname",this.data.lastname)
      formData.append("Email",this.data.email)
      formData.append("Mobileno",this.data.mobileno)
      formData.append("Password",this.data.password)
      formData.append("ConfirmPassword",this.data.confirmPassword)
  
      console.log(this.signupObj)
      this.api.Signup(formData)
        .subscribe(res => {
          alert("success");
        })
    }
}