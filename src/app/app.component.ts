
/**
 * @description The below code is used to display about the details of the main app page of application
 * importing Component,OnInit from '@angular/core';
 * importing Swal from 'sweetalert2'
 * importing html and css from the main app component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


/**
 * @Params Creating the class AppComponent and exporting it
 */

export class AppComponent implements OnInit {
 title = 'CMSAPP';
 
 constructor() { }

 ngOnInit(): void {
 }
 alertConfirmation(){
   Swal.fire({
     title: 'Access Denied!',
     text: 'Login to continue',
     icon: 'warning',
     showCancelButton: false,
     confirmButtonText: 'Ok',
   }).then((result) => {
    if (result) {
      window.location.href = "/login";
    }
   })
 }  
}