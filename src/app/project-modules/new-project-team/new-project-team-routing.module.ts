import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewProjectTeamComponent} from './new-project-team.component';

const routes: Routes = [
  {
    path: '',
    component: NewProjectTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProjectTeamRoutingModule { }
