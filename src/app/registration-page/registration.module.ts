import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

import { SharedModule } from '../shared/shared.module';

import { RegistrationService } from './registration.service';

@NgModule({
  imports: [
    SharedModule,

    RegistrationRoutingModule,
  ],
  declarations: [
    RegistrationComponent
  ],
  providers: [RegistrationService]
})
export class RegistrationModule { }
