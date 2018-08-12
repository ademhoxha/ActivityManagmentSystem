import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewProjectTaskComponent} from '@app/project-modules/new-project-task/new-project-task.component';
const routes: Routes = [
  {
    path: '',
    component: NewProjectTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProjectTaskRoutingModule { }
