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
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorComponent } from './error/error.component';
import { TestComponent } from './test/test.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { LateralActivityMenuComponent } from './activity/lateral-activity-menu/lateral-activity-menu.component';
import { ProjectLateralMenuComponent } from './project/project-lateral-menu/project-lateral-menu.component';
import { DropdownNotificationComponent } from './notification/dropdown-notification/dropdown-notification.component';
import { DropdownMessageComponent } from './message/dropdown-message/dropdown-message.component';
import { SearchComponent } from './search/search.component';
import { MessageItemComponent } from './message/message-item/message-item.component';
import { NotificationItemComponent } from './notification/notification-item/notification-item.component';
import { NewProjectComponent } from './project/new-project/new-project.component';

// external components primeNG
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
// external components angular material
//import {MatDatepickerModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessAuthComponent,
    RegistrationComponent,
    OtpComponent,
    LoginPageComponent,
    ErrorComponent,
    TestComponent,
    DashboardExampleComponent,
    LateralActivityMenuComponent,
    ProjectLateralMenuComponent,
    DropdownNotificationComponent,
    DropdownMessageComponent,
    SearchComponent,
    MessageItemComponent,
    NotificationItemComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [AuthApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
