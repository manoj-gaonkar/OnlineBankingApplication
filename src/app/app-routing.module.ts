import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { ForgotComponent } from './components/login/forgot/forgot.component';
import { CustomerloginComponent } from './components/login/customerlogin/customerlogin.component';
import { StaffloginComponent } from './components/login/stafflogin/stafflogin.component';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '',   redirectTo: 'landing', pathMatch: 'full' },
  {path:'landing',component:LandingComponent},
  {path:'main',component:AppComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent,children:[
    {path:'',redirectTo:'customer',pathMatch:'full'},
    {path:'customer',component:CustomerloginComponent},
    {path:'admin',component:AdminloginComponent},
    {path:'staff',component:StaffloginComponent},
  ]},
  {path:'login/forgot',component:ForgotComponent}
  // {path:'',redirectTo:"/main",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
