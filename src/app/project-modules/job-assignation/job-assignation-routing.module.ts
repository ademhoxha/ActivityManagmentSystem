import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobAssignationComponent } from '@app/project-modules/job-assignation/job-assignation.component';

const routes: Routes = [
  {
    path: '',
    component: JobAssignationComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAssignationRoutingModule { }
