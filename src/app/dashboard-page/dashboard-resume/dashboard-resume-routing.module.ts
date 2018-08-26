import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardResumeComponent } from '@app/dashboard-page/dashboard-resume/dashboard-resume.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardResumeRoutingModule { }
