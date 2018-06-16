import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

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
        path: 'newprojecttask',
        loadChildren: 'app/project-modules/new-project-task/new-project-task.module#NewProjectTaskModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
