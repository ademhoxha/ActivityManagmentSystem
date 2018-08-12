import { NgModule } from '@angular/core';

import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared';
import { ActivityCoreModule } from '@app/activity-modules/activity-core/activity-core.module';
import { SchedulerComponent } from '@app/activity-modules/activity-shared/scheduler/scheduler.component';
import { DaySchedulerComponent } from '@app/activity-modules/activity-shared/day-scheduler/day-scheduler.component';
import { AllDaySchedulerComponent } from '@app/activity-modules/activity-shared/all-day-scheduler/all-day-scheduler.component';
import { JobListPopupComponent } from '@app/activity-modules/activity-shared/job-list-popup/job-list-popup.component'

@NgModule({
  imports: [
    DashboardSharedModule,
    ActivityCoreModule,
  ],
  declarations: [
    SchedulerComponent,
    DaySchedulerComponent,
    AllDaySchedulerComponent,
    JobListPopupComponent,
  ],
  exports: [
    DashboardSharedModule,
    ActivityCoreModule,
    SchedulerComponent,
    DaySchedulerComponent,
    AllDaySchedulerComponent,
    JobListPopupComponent,

  ]
})
export class ActivitySharedModule { }
