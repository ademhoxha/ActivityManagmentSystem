import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent } from '@app/activity-modules/activity-shared/scheduler/scheduler.component';
import { AllDayBuilder, ISchedulerBuilder } from '@app/activity-modules/activity-shared/schedulerUtils';

@Component({
  selector: 'app-all-day-scheduler',
  templateUrl: '../scheduler/scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../scheduler/scheduler.component.css']
})
export class AllDaySchedulerComponent extends SchedulerComponent {

  @Input() schedulerBuilder: ISchedulerBuilder = new AllDayBuilder();
  
  constructor() {
    super();
  }

}