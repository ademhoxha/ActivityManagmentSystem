import { NgModule } from '@angular/core';
import { ProjectSharedModule } from '@app/project-modules/project-shared/project-shared.module';

import { NewProjectRoutingModule } from '@app/project-modules/new-project/new-project-routing.module';

import { NewProjectComponent } from '@app/project-modules/new-project/new-project.component';

@NgModule({
  imports: [
    ProjectSharedModule,

    NewProjectRoutingModule
  ],
  declarations: [
    NewProjectComponent
  ],
  providers : [
  ]

})
export class NewProjectModule { }
