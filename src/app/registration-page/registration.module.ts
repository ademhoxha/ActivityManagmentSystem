import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from '@app/registration-page/registration-routing.module';
import { RegistrationComponent } from '@app/registration-page/registration.component';

import { SharedModule } from '@app/shared/shared.module';

import { RegistrationService } from '@app/registration-page/registration.service';

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
