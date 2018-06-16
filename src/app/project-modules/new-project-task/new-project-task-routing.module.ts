import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewProjectTaskComponent} from './new-project-task.component';
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
