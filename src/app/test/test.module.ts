import { NgModule } from '@angular/core';

import { TestRoutingModule } from '@app/test/test-routing.module';
import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared/dashboard-shared.module'

import { TestComponent } from '@app/test/test/test.component'
import { ClickWaveComponent } from '@app/test/click-wave/click-wave.component';

import { TreeModule } from 'primeng/tree';
import { TreeDragDropService } from 'primeng/api';
import { ReducedViewTestComponent } from '@app/test/reduced-view-test/reduced-view-test.component';
import { DragDropTestComponent } from '@app/test/drag-drop-test/drag-drop-test.component';

// 3rd party
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableStyleComponent } from '@app/test/table-style/table-style.component';
import { SchedulerComponent } from '@app/test/scheduler/scheduler.component';



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
