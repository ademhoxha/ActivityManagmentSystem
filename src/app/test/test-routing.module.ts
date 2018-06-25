import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component'
import { ReducedViewTestComponent } from './reduced-view-test/reduced-view-test.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: 'view', component: ReducedViewTestComponent },
      { path: 'drag', component: DragDropTestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
