import { NgModule } from '@angular/core';
import { ProjectSharedModule } from '@app/project-modules/project-shared/project-shared.module';

import { NewProjectTeamRoutingModule } from './new-project-team-routing.module';

import {NewProjectTeamComponent} from './new-project-team.component';

@NgModule({
  imports: [
    ProjectSharedModule,

    NewProjectTeamRoutingModule
  ],
  declarations: [
    NewProjectTeamComponent,
  ],
  exports: [
    ProjectSharedModule
  ]
})
export class NewProjectTeamModule { }
