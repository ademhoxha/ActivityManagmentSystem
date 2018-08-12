import { NgModule } from '@angular/core';

import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared';
import { ProjectCoreModule } from '@app/project-modules/project-core/project-core.module';

import { PickProjectAvailableUsersComponent } from '@app/project-modules/project-shared/pick-project-available-users/pick-project-available-users.component';
import { ProjectUserListTableComponent } from '@app/project-modules/project-shared/project-user-list-table/project-user-list-table.component';
import { SelectProjectComponent } from '@app/project-modules/project-shared/select-project/select-project.component';
import { ProjectReducedViewComponent } from '@app/project-modules/project-shared/project-reduced-view/project-reduced-view.component';
import { RemoveProjectUserPuComponent } from '@app/project-modules/project-shared/remove-project-user-pu/remove-project-user-pu.component';
import { NewTaskReducedViewComponent } from '@app/project-modules/project-shared/new-task-reduced-view/new-task-reduced-view.component';

@NgModule({
  imports: [
    DashboardSharedModule,
    ProjectCoreModule
  ],
  declarations: [
    PickProjectAvailableUsersComponent,
    ProjectUserListTableComponent,
    SelectProjectComponent,
    ProjectReducedViewComponent,
    RemoveProjectUserPuComponent,
    NewTaskReducedViewComponent
  ],
  exports: [
    DashboardSharedModule,
    ProjectCoreModule,

    PickProjectAvailableUsersComponent,
    ProjectUserListTableComponent,
    SelectProjectComponent,
    ProjectReducedViewComponent,
    RemoveProjectUserPuComponent,
    NewTaskReducedViewComponent
  ]
})
export class ProjectSharedModule { }
