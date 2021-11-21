import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'password',component:PasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
