import { NgModule } from '@angular/core';

import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared';

import { DashboardRoutingModule } from '@app/dashboard-page/dashboard-routing.module';


import { LateralActivityMenuComponent } from '@app/dashboard-page/lateral-activity-menu/lateral-activity-menu.component';
import { ProjectLateralMenuComponent } from '@app/dashboard-page/project-lateral-menu/project-lateral-menu.component';
import { SearchComponent } from '@app/dashboard-page/search/search.component';

import { DropdownNotificationComponent } from '@app/notification-modules/dropdown-notification/dropdown-notification.component';
import { NotificationItemComponent } from '@app/notification-modules/notification-item/notification-item.component';

import { DropdownMessageComponent } from '@app/message-modules/dropdown-message/dropdown-message.component';
import { MessageItemComponent } from '@app/message-modules/message-item/message-item.component';
import { TopMenuComponent } from '@app/dashboard-page/top-menu/top-menu.component';
import { DashboardLateralMenuComponent } from '@app/dashboard-page/dashboard-lateral-menu/dashboard-lateral-menu.component';
import { DashboardAppViewComponent } from './dashboard-app-view/dashboard-app-view.component';
import { AppViewFunctionComponent } from './app-view-function/app-view-function.component';
import { AppTopMenuComponent } from './app-top-menu/app-top-menu.component';
import { InteractiveAppMenuComponent } from './interactive-app-menu/interactive-app-menu.component';
import { FunctionViewFunctionComponent } from './function-view-function/function-view-function.component';



@NgModule({
  imports: [
    DashboardSharedModule,

    DashboardRoutingModule
  ],
  declarations: [

    LateralActivityMenuComponent,
    ProjectLateralMenuComponent,
    SearchComponent,
    DropdownNotificationComponent,
    NotificationItemComponent,
    MessageItemComponent,
    DropdownMessageComponent,
    TopMenuComponent,
    DashboardLateralMenuComponent,
    DashboardAppViewComponent,
    AppViewFunctionComponent,
    AppTopMenuComponent,
    InteractiveAppMenuComponent,
    FunctionViewFunctionComponent,

  ],
  entryComponents: [ FunctionViewFunctionComponent ] /* Dynamic Component */
  
})
export class DashboardModule { }
