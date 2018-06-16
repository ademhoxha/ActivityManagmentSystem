import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectApiService} from './project-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProjectApiService]
})
export class ProjectCoreModule { }
