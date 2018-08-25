import { NgModule } from '@angular/core';

import {SharedModule} from '@app/shared'

// dashboard custom shared components
import { StartEndDateComponent } from '@app/dashboard-page/dashboard-shared/date-components/start-end-date/start-end-date.component';
import { DropdownListComponent } from '@app/dashboard-page/dashboard-shared/list-components/dropdown-list/dropdown-list.component';
import { PickListComponent } from '@app/dashboard-page/dashboard-shared/list-components/pick-list/pick-list.component';
import { TableComponent } from '@app/dashboard-page/dashboard-shared/table-components/table/table.component';
import { DropdownGroupListComponent } from '@app/dashboard-page/dashboard-shared/list-components/dropdown-group-list/dropdown-group-list.component';
import { InputFormComponent } from '@app/dashboard-page/dashboard-shared/input-form/input-form.component';
import { StepMenuComponent } from '@app/dashboard-page/dashboard-shared/step-menu/step-menu.component';
import { StepItemComponent } from '@app/dashboard-page/dashboard-shared/step-item/step-item.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    StartEndDateComponent,
    DropdownListComponent,
    PickListComponent,
    TableComponent,
    DropdownGroupListComponent,
    InputFormComponent,
    StepMenuComponent,
    StepItemComponent
  ],
  exports: [
    SharedModule,
    StartEndDateComponent,
    DropdownListComponent,
    PickListComponent,
    TableComponent,
    DropdownGroupListComponent,
    InputFormComponent,
    StepMenuComponent,
    StepItemComponent
  ]
})
export class DashboardSharedModule { }
