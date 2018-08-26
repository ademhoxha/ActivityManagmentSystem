import { NgModule } from '@angular/core';

import { DashboardResumeRoutingModule } from './dashboard-resume-routing.module';
import { DashboardResumeComponent } from './dashboard-resume.component';
import { ProjectSharedModule } from '@app/project-modules/project-shared/project-shared.module';

@NgModule({
  imports: [
    ProjectSharedModule,

    DashboardResumeRoutingModule
  ],
  declarations: [
    DashboardResumeComponent
  ],
  providers : [
  ]
})
export class DashboardResumeModule { }
