import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAppViewComponent } from '@app/dashboard-page/dashboard-app-view/dashboard-app-view.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAppViewComponent,
    children: [
      {
        path: 'resume',
        loadChildren: 'app/dashboard-page/dashboard-resume/dashboard-resume.module#DashboardResumeModule',
        data: { state: 'resume'} 
      },
      {
        path: 'newproject',
        loadChildren: 'app/project-modules/new-project/new-project.module#NewProjectModule',
        data: { state: 'newproject'} 
      },
      {
        path: 'newprojectteam',
        loadChildren: 'app/project-modules/new-project-team/new-project-team.module#NewProjectTeamModule',
        data: { state: 'newprojectteam'} 
      },
      {
        path: 'removeprojectmember',
        loadChildren: 'app/project-modules/remove-project-member/remove-project-member.module#RemoveProjectMemberModule',
        data: { state: 'removeprojectmember'} 
      },
      {
        path: 'newprojecttask',
        loadChildren: 'app/project-modules/new-project-task/new-project-task.module#NewProjectTaskModule',
        data: { state: 'newprojecttask'} 
      },
      {
        path: 'insertdayactivity',
        loadChildren: 'app/activity-modules/new-day-activity/new-day-activity.module#NewDayActivityModule',
        data: { state: 'insertdayactivity'} 
      },
      {
        path: 'managemonthactivity',
        loadChildren: 'app/activity-modules/month-activity/month-activity.module#MonthActivityModule',
        data: { state: 'managemonthactivity'} 
      },
      {
        path: 'jobassignation',
        loadChildren: 'app/project-modules/job-assignation/job-assignation.module#JobAssignationModule',
        data: { state: 'jobassignation'} 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
