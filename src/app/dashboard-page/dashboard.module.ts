import { NgModule } from '@angular/core';

import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared';

import { DashboardRoutingModule } from './dashboard-routing.module';


import { DashboardComponent } from './dashboard.component';
import { LateralActivityMenuComponent } from './lateral-activity-menu/lateral-activity-menu.component';
import { ProjectLateralMenuComponent } from './project-lateral-menu/project-lateral-menu.component';
import { SearchComponent } from './search/search.component';

import { DropdownNotificationComponent } from '@app/notification-modules/dropdown-notification/dropdown-notification.component';
import { NotificationItemComponent } from '@app/notification-modules/notification-item/notification-item.component';

import { DropdownMessageComponent } from '@app/message-modules/dropdown-message/dropdown-message.component';
import { MessageItemComponent } from '@app/message-modules/message-item/message-item.component';
import { TopMenuComponent } from './top-menu/top-menu.component';



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
