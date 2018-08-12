import { NgModule } from '@angular/core';
import { ProjectSharedModule } from '@app/project-modules/project-shared/project-shared.module';

import { RemoveProjectMemberRoutingModule } from '@app/project-modules/remove-project-member/remove-project-member-routing.module';
import { RemoveProjectMemberComponent } from '@app/project-modules/remove-project-member/remove-project-member.component';

@NgModule({
  imports: [
    ProjectSharedModule,
    RemoveProjectMemberRoutingModule
  ],
  declarations: [
    RemoveProjectMemberComponent
  ],
  exports: [
    ProjectSharedModule
  ]
})
export class RemoveProjectMemberModule { }
