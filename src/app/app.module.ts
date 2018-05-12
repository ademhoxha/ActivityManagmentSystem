import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccessAuthComponent } from './success-auth/success-auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthApiService } from './auth-api/auth-api.service';
import { OtpComponent } from './opt/otp/otp.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessAuthComponent,
    RegistrationComponent,
    OtpComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
