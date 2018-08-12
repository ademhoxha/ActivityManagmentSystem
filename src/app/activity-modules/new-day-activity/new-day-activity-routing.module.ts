import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDayActivityComponent } from '@app/activity-modules/new-day-activity/new-day-activity.component';

const routes: Routes = [
  {
    path: '',
    component: NewDayActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDayActivityRoutingModule { }
