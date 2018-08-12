import { NgModule } from '@angular/core';

import { MonthActivityRoutingModule } from './month-activity-routing.module';
import { MonthActivityComponent } from './month-activity.component';
import { ActivitySharedModule } from '@app/activity-modules/activity-shared/activity-shared.module';

@NgModule({
  imports: [
    ActivitySharedModule,
    
    MonthActivityRoutingModule
  ],
  declarations: [
    MonthActivityComponent
  ]
})
export class MonthActivityModule { }
