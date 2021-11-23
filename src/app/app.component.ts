import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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