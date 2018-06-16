import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginPageRoutingModule } from './login-page-routing.module';

import { LoginPageComponent } from './login-page.component';
import { OtpComponent } from './opt/otp.component';
import { LoginComponent } from './login/login.component';
import { AuthApiService } from './auth-api/auth-api.service';

@NgModule({
  imports: [
    SharedModule,

    LoginPageRoutingModule,

  ],
  declarations: [

    LoginPageComponent, 
    OtpComponent, 
    LoginComponent

  ],
  providers: [AuthApiService]
})
export class LoginPageModule { }
