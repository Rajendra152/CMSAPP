import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstname = "";
  lastname = "";
  email = "";
  mobileno = "";
  password = "";
  confirmPassword = "";

  valid = {
  firstname : true,
  lastname : true,
  email : true,
  mobileno : true,
  password : true,
  confirmPassword : true,
  }
  constructor() { }

  ngOnInit(): void {
  }
  //validation part
  validate(type: string): void {
    const usernamePattern = /^[a-zA-Z]+$/
    const emailPattern = /\S+@\S+\.\S+/;
    const mobilePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (type === 'firstname') {
      if (this.firstname.length < 3 || this.firstname.length>=10) {
        this.valid.firstname = false;
      } else {
        this.valid.firstname = usernamePattern.test(this.firstname);
      }
    }
    else if(type === "lastname"){
      if(this.lastname.length<3 || this.lastname.length>=10){
        this.valid.lastname = false;
      }else{
        this.valid.lastname = usernamePattern.test(this.lastname)
      }
    } else if(type === "mobileno"){
      if(this.mobileno.length<10 || this.mobileno.length>10){
        this.valid.mobileno = false
      }else{
          this.valid.mobileno = mobilePattern.test(this.mobileno)
      }
    }
     else if (type === 'email') {
      this.valid.email = emailPattern.test(this.email);
    } else if (type === ('confirmPassword' || 'password')) {
      if (this.password !== this.confirmPassword) {
        this.valid.password = false;
      } else {
        this.valid.password = true;
      }
    }
  }

  //onkey function
    onkey(event:any , type:string){
      if(type === 'firstname'){
       this.firstname = event.target.value;
      }else if(type==="lastname"){
        this.lastname = event.target.value;
      }else if( type === "email"){
        this.email = event.target.value;
      }else if (type === "password"){
        this.password = event.target.value;
      }else if (type === "confirmPassword"){
        this.confirmPassword = event.target.value;
      }else if (type === "mobileno"){
        this.mobileno = event.target.value;
      }
      this.validate(type)
    }
}