import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginPageComponent } from './login-page/login-page.component';

// Test component
import { TestComponent } from './test/test.component';
import {DashboardExampleComponent} from './dashboard-example/dashboard-example.component';


const routes: Routes = [
  /* { path: '', redirectTo: '/dashboard', pathMatch: 'full' },*/
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardExampleComponent },

  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
