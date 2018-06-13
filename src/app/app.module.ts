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
import { NewProjectTaskComponent } from './project/new-project-task/new-project-task.component';
import { NewProjectTeamComponent } from './project/new-project-team/new-project-team.component';
import { EditProjectTeamComponent } from './project/edit-project-team/edit-project-team.component';
import { NewTaskAssignationComponent } from './project/new-task-assignation/new-task-assignation.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ViewActivityComponent } from './activity/view-activity/view-activity.component';
import { NewDayActivityComponent } from './activity/new-day-activity/new-day-activity.component';
import { StartEndDateComponent } from './date-components/start-end-date/start-end-date.component';
import { DropdownListComponent } from './list-components/dropdown-list/dropdown-list.component';
import { SelectProjectComponent } from './project/select-project/select-project.component';
import { PickListComponent } from './list-components/pick-list/pick-list.component';
import { OperationResultComponent } from './operation-result/operation-result.component';

// services
import { AuthApiService } from './auth-api/auth-api.service';
import { ProjectApiService } from './services/project-api.service';

// external components primeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderComponent } from './loader/loader.component';
import { PickProjectAvailableUsersComponent } from './project/pick-project-available-users/pick-project-available-users.component';
import { TableComponent } from './table-components/table/table.component';
import { ProjectUserListTableComponent } from './project/project-user-list-table/project-user-list-table.component';


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
    NewProjectComponent,
    OperationResultComponent,
    NewProjectTaskComponent,
    NewProjectTeamComponent,
    EditProjectTeamComponent,
    NewTaskAssignationComponent,
    ViewProjectComponent,
    ViewActivityComponent,
    NewDayActivityComponent,
    StartEndDateComponent,
    DropdownListComponent,
    SelectProjectComponent,
    PickListComponent,
    LoaderComponent,
    PickProjectAvailableUsersComponent,
    TableComponent,
    ProjectUserListTableComponent
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
    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextModule,
    KeyFilterModule,
    DropdownModule,
    AutoCompleteModule,
    TabViewModule,
    PickListModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [AuthApiService, ConfirmationService, ProjectApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
