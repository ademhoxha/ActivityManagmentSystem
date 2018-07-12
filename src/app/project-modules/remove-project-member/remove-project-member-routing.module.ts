import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveProjectMemberComponent } from './remove-project-member.component';

const routes: Routes = [
  {
    path: '',
    component: RemoveProjectMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveProjectMemberRoutingModule { }
