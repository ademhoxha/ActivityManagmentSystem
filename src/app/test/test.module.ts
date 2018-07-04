import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared/dashboard-shared.module'

import { TestComponent } from './test/test.component'

import {TreeModule} from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';
import { ReducedViewTestComponent } from './reduced-view-test/reduced-view-test.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';

// 3rd party
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';


@NgModule({
  imports: [
    DashboardSharedModule,
    TestRoutingModule,
    TreeModule,
    ProgressBarModule,
    SliderModule
  ],
  declarations: [
    TestComponent,
    ReducedViewTestComponent,
    DragDropTestComponent
  ],
  exports : [
    TestComponent,
    TreeModule,
    ProgressBarModule,
    SliderModule
  ],
  providers : [
    TreeDragDropService
  ]
})
export class TestModule { }
