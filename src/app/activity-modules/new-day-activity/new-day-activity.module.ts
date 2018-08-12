import { NgModule } from '@angular/core';

import { NewDayActivityRoutingModule } from './new-day-activity-routing.module';
import { NewDayActivityComponent } from './new-day-activity.component';
import { ActivitySharedModule } from '@app/activity-modules/activity-shared/activity-shared.module'

@NgModule({
  imports: [
    NewDayActivityRoutingModule,

    ActivitySharedModule,
  ],
  declarations: [
    NewDayActivityComponent
  ]
})
export class NewDayActivityModule { }
