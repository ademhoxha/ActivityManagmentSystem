import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { LoginPageRoutingModule } from '@app/login-page/login-page-routing.module';

import { LoginPageComponent } from '@app/login-page/login-page.component';
import { OtpComponent } from '@app/login-page/opt/otp.component';
import { LoginComponent } from '@app/login-page/login/login.component';
import { AuthApiService } from '@app/login-page/auth-api/auth-api.service';

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
