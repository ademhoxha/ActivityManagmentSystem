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
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ScheduleModule } from 'primeng/schedule';
import { DragDropModule } from 'primeng/dragdrop';
import { DialogModule } from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';


// custom shared components
import { ErrorComponent } from '@app/shared/error/error.component';
import { LoaderComponent } from '@app/shared/loader/loader.component';
import { OperationResultComponent } from '@app/shared/operation-result/operation-result.component';
import { BlockUiComponent } from '@app/shared/block-ui/block-ui.component';
import { PopUpComponent } from '@app/shared/pop-up/pop-up.component';
import { MessageComponent } from '@app/shared/message/message.component';

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
    InputSwitchModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    ScheduleModule,
    DragDropModule,
    DialogModule,
    TabMenuModule,
    OverlayPanelModule
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
    PopUpComponent,
    MessageComponent

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
    PasswordModule,
    MessagesModule,
    MessageModule,
    ScheduleModule,
    DragDropModule,
    DialogModule,
    TabMenuModule,
    OverlayPanelModule,

    // custom shared components
    ErrorComponent,
    LoaderComponent,
    OperationResultComponent,
    BlockUiComponent,
    PopUpComponent,
    MessageComponent
  ]
})
export class SharedModule { }
