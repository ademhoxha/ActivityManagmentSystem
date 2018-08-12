import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityApiService } from '@app/activity-modules/activity-core/activity-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ActivityApiService
  ]
})
export class ActivityCoreModule { }
