import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd party 
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
import { BlockUIModule } from 'primeng/blockui';
import { FieldsetModule } from 'primeng/fieldset';
import { TooltipModule } from 'primeng/tooltip';
import { SpinnerModule } from 'primeng/spinner';
import {InputSwitchModule} from 'primeng/inputswitch';

// custom shared components
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { OperationResultComponent } from './operation-result/operation-result.component';
import { BlockUiComponent } from './block-ui/block-ui.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  imports: [
    CommonModule,

    // angular
    FormsModule,
    ReactiveFormsModule,

    // 3rd party
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
    BlockUIModule,
    FieldsetModule,
    TooltipModule,
    SpinnerModule,
    InputSwitchModule
  ],
  providers: [
    // 3rd party
    ConfirmationService
  ],
  declarations: [

    // custom shared components
    ErrorComponent,
    LoaderComponent,
    OperationResultComponent,
    BlockUiComponent,
    PopUpComponent

  ],
  exports: [
    CommonModule,

    // angular
    FormsModule,
    ReactiveFormsModule,

    // 3rd party
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
    BlockUIModule,
    FieldsetModule,
    TooltipModule,
    SpinnerModule,
    InputSwitchModule,

    // custom shared components
    ErrorComponent,
    LoaderComponent,
    OperationResultComponent,
    BlockUiComponent,
    PopUpComponent
  ]
})
export class SharedModule { }
