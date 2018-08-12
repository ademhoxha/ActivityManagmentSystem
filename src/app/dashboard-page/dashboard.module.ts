import { NgModule } from '@angular/core';

import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared';

import { DashboardRoutingModule } from '@app/dashboard-page/dashboard-routing.module';


import { DashboardComponent } from '@app/dashboard-page/dashboard.component';
import { LateralActivityMenuComponent } from '@app/dashboard-page/lateral-activity-menu/lateral-activity-menu.component';
import { ProjectLateralMenuComponent } from '@app/dashboard-page/project-lateral-menu/project-lateral-menu.component';
import { SearchComponent } from '@app/dashboard-page/search/search.component';

import { DropdownNotificationComponent } from '@app/notification-modules/dropdown-notification/dropdown-notification.component';
import { NotificationItemComponent } from '@app/notification-modules/notification-item/notification-item.component';

import { DropdownMessageComponent } from '@app/message-modules/dropdown-message/dropdown-message.component';
import { MessageItemComponent } from '@app/message-modules/message-item/message-item.component';
import { TopMenuComponent } from '@app/dashboard-page/top-menu/top-menu.component';



@NgModule({
  imports: [
    DashboardSharedModule,

    DashboardRoutingModule
  ],
  declarations: [

    DashboardComponent,
    LateralActivityMenuComponent,
    ProjectLateralMenuComponent,
    SearchComponent,
    DropdownNotificationComponent,
    NotificationItemComponent,
    MessageItemComponent,
    DropdownMessageComponent,
    TopMenuComponent,

  ]
})
export class DashboardModule { }
