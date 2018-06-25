import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared/dashboard-shared.module'

import { TestComponent } from './test/test.component'

import {TreeModule} from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';
import { ReducedViewTestComponent } from './reduced-view-test/reduced-view-test.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';

@NgModule({
  imports: [
    DashboardSharedModule,
    TestRoutingModule,
    TreeModule
  ],
  declarations: [
    TestComponent,
    ReducedViewTestComponent,
    DragDropTestComponent
  ],
  exports : [
    TestComponent,
    TreeModule
  ],
  providers : [
    TreeDragDropService
  ]
})
export class TestModule { }
