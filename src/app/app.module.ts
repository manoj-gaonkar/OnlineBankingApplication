import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ForgotComponent } from './components/login/forgot/forgot.component';
import { CustomerloginComponent } from './components/login/customerlogin/customerlogin.component';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';
import { StaffloginComponent } from './components/login/stafflogin/stafflogin.component';
import { CommonModule } from '@angular/common';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { CustomerpageComponent } from './components/customerpage/customerpage.component';
import { StaffpageComponent } from './components/staffpage/staffpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    ForgotComponent,
    CustomerloginComponent,
    AdminloginComponent,
    StaffloginComponent,
    AdminpageComponent,
    CustomerpageComponent,
    StaffpageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
