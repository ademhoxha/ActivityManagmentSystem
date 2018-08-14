import { NgModule } from '@angular/core';
import { ProjectSharedModule } from '@app/project-modules/project-shared/project-shared.module';


import { JobAssignationComponent } from '@app/project-modules/job-assignation/job-assignation.component';
import { JobAssignationRoutingModule } from '@app/project-modules/job-assignation/job-assignation-routing.module';


@NgModule({
  imports: [
    ProjectSharedModule,

    JobAssignationRoutingModule
  ],
  declarations: [
    JobAssignationComponent
  ]
})
export class JobAssignationModule { }
