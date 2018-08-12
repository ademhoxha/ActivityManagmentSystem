import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '@app/dashboard-page/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'newproject',
        loadChildren: 'app/project-modules/new-project/new-project.module#NewProjectModule'
      },
      {
        path: 'newprojectteam',
        loadChildren: 'app/project-modules/new-project-team/new-project-team.module#NewProjectTeamModule'
      },
      {
        path: 'removeprojectmember',
        loadChildren: 'app/project-modules/remove-project-member/remove-project-member.module#RemoveProjectMemberModule'
      },
      {
        path: 'newprojecttask',
        loadChildren: 'app/project-modules/new-project-task/new-project-task.module#NewProjectTaskModule'
      },
      {
        path: 'insertdayactivity',
        loadChildren: 'app/activity-modules/new-day-activity/new-day-activity.module#NewDayActivityModule'
      },
      {
        path: 'managemonthactivity',
        loadChildren: 'app/activity-modules/month-activity/month-activity.module#MonthActivityModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
