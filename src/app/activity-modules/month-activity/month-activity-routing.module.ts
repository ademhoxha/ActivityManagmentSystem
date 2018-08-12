import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthActivityComponent } from '@app/activity-modules/month-activity/month-activity.component';

const routes: Routes = [
  {
    path: '',
    component: MonthActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthActivityRoutingModule { }
