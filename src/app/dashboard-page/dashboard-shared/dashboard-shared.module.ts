import { NgModule } from '@angular/core';

import {SharedModule} from '@app/shared'

// dashboard custom shared components
import { StartEndDateComponent } from './date-components/start-end-date/start-end-date.component';
import { DropdownListComponent } from './list-components/dropdown-list/dropdown-list.component';
import { PickListComponent } from './list-components/pick-list/pick-list.component';
import { TableComponent } from './table-components/table/table.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    StartEndDateComponent,
    DropdownListComponent,
    PickListComponent,
    TableComponent
  ],
  exports: [
    SharedModule,
    StartEndDateComponent,
    DropdownListComponent,
    PickListComponent,
    TableComponent
  ]
})
export class DashboardSharedModule { }
