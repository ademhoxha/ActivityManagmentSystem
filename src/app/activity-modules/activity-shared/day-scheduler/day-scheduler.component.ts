import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent } from '@app/activity-modules/activity-shared/scheduler/scheduler.component';
import { OneDayBuilder, ISchedulerBuilder } from '@app/activity-modules/activity-shared/schedulerUtils';

@Component({
  selector: 'app-day-scheduler',
  templateUrl: '../scheduler/scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../scheduler/scheduler.component.css']
})
export class DaySchedulerComponent extends SchedulerComponent {

  @Input() schedulerBuilder: ISchedulerBuilder = new OneDayBuilder();

  constructor() {
    super();
  }

}
