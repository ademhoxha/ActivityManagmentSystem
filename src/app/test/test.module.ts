import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared/dashboard-shared.module'

import { TestComponent } from './test/test.component'
import { ClickWaveComponent } from './click-wave/click-wave.component';

import { TreeModule } from 'primeng/tree';
import { TreeDragDropService } from 'primeng/api';
import { ReducedViewTestComponent } from './reduced-view-test/reduced-view-test.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';

// 3rd party
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableStyleComponent } from './table-style/table-style.component';
import { SchedulerComponent } from './scheduler/scheduler.component';



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
    DragDropTestComponent,
    ClickWaveComponent,
    TableStyleComponent,
    SchedulerComponent
  ],
  exports: [
    TestComponent,
    ClickWaveComponent,
    DragDropTestComponent,
    TreeModule,
    ProgressBarModule,
    SliderModule,
    TableStyleComponent,
    SchedulerComponent
  ],
  providers: [
    TreeDragDropService
  ]
})
export class TestModule { }
