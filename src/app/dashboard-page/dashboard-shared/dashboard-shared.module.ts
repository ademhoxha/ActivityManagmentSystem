import { NgModule } from '@angular/core';

import {SharedModule} from '@app/shared'

// dashboard custom shared components
import { StartEndDateComponent } from '@app/dashboard-page/dashboard-shared/date-components/start-end-date/start-end-date.component';
import { DropdownListComponent } from '@app/dashboard-page/dashboard-shared/list-components/dropdown-list/dropdown-list.component';
import { PickListComponent } from '@app/dashboard-page/dashboard-shared/list-components/pick-list/pick-list.component';
import { TableComponent } from '@app/dashboard-page/dashboard-shared/table-components/table/table.component';

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
