import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from '@app/test/test/test.component'
import { ReducedViewTestComponent } from '@app/test/reduced-view-test/reduced-view-test.component';
import { DragDropTestComponent } from '@app/test/drag-drop-test/drag-drop-test.component';
import { ClickWaveComponent } from '@app/test/click-wave/click-wave.component';
import { TableStyleComponent } from '@app/test/table-style/table-style.component';
import { SchedulerComponent } from '@app/test/scheduler/scheduler.component';


const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: 'view', component: ReducedViewTestComponent },
      { path: 'drag', component: DragDropTestComponent },
      { path: 'click', component: ClickWaveComponent },
      { path: 'table', component: TableStyleComponent },
      { path: 'schedule', component: SchedulerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
