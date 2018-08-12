import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectApiService} from '@app/project-modules/project-core/project-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProjectApiService]
})
export class ProjectCoreModule { }
