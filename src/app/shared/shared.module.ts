import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd prty 
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// custom shared components
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { OperationResultComponent } from './operation-result/operation-result.component';

@NgModule({
  imports: [
    CommonModule,

    // angular
    FormsModule,
    ReactiveFormsModule,

    // 3rd prty
    AngularFontAwesomeModule,

    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextModule,
    KeyFilterModule,
    DropdownModule,
    AutoCompleteModule,
    TabViewModule,
    PickListModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [ConfirmationService],
  declarations: [

    // custom shared components
    ErrorComponent,
    LoaderComponent,
    OperationResultComponent,

  ],
  exports: [
    CommonModule,

    // angular
    FormsModule,
    ReactiveFormsModule,

    // 3rd prty
    AngularFontAwesomeModule,

    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextModule,
    KeyFilterModule,
    DropdownModule,
    AutoCompleteModule,
    TabViewModule,
    PickListModule,
    TableModule,
    ProgressSpinnerModule,

    // custom shared components
    ErrorComponent,
    LoaderComponent,
    OperationResultComponent
  ]
})
export class SharedModule { }
