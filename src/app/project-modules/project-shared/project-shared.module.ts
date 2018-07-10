import { NgModule } from '@angular/core';

import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared';
import { ProjectCoreModule } from '@app/project-modules/project-core/project-core.module';

import { PickProjectAvailableUsersComponent } from './pick-project-available-users/pick-project-available-users.component';
import { ProjectUserListTableComponent } from './project-user-list-table/project-user-list-table.component';
import { SelectProjectComponent } from './select-project/select-project.component';
import { ProjectReducedViewComponent } from './project-reduced-view/project-reduced-view.component'

@NgModule({
  imports: [
    DashboardSharedModule,
    ProjectCoreModule
  ],
  declarations: [
    PickProjectAvailableUsersComponent,
    ProjectUserListTableComponent,
    SelectProjectComponent,
    ProjectReducedViewComponent
  ],
  exports: [
    DashboardSharedModule,
    ProjectCoreModule,

    PickProjectAvailableUsersComponent,
    ProjectUserListTableComponent,
    SelectProjectComponent,
    ProjectReducedViewComponent
  ]
})
export class ProjectSharedModule { }
