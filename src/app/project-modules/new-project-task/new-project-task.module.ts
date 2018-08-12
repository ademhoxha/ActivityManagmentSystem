import { NgModule } from '@angular/core';
import { ProjectSharedModule } from '@app/project-modules/project-shared/project-shared.module';

import { NewProjectTaskRoutingModule } from '@app/project-modules/new-project-task/new-project-task-routing.module';

import {NewProjectTaskComponent} from '@app/project-modules/new-project-task/new-project-task.component';

@NgModule({
  imports: [
    ProjectSharedModule,
    NewProjectTaskRoutingModule
  ],
  declarations: [
    NewProjectTaskComponent,
  ],
  exports: [

  ]
})
export class NewProjectTaskModule { }
