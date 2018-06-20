import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { DashboardSharedModule } from '@app/dashboard-page/dashboard-shared/dashboard-shared.module'

import { TestComponent } from './test/test.component'

import {TreeModule} from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';

@NgModule({
  imports: [
    DashboardSharedModule,
    TestRoutingModule,
    TreeModule
  ],
  declarations: [
    TestComponent
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
