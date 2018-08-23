import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardResumeRoutingModule } from './dashboard-resume-routing.module';
import { DashboardResumeComponent } from './dashboard-resume.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardResumeRoutingModule
  ],
  declarations: [DashboardResumeComponent]
})
export class DashboardResumeModule { }
