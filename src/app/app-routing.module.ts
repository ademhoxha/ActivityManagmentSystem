import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SuccessAuthComponent} from './success-auth/success-auth.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
 /* { path: '', redirectTo: '/dashboard', pathMatch: 'full' },*/
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'success', component: SuccessAuthComponent },
  { path: '**', component: LoginComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
