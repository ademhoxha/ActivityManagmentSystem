import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  /* { path: '', redirectTo: '/dashboard', pathMatch: 'full' },*/

  //{ path: 'login', component: LoginPageComponent },
  { path: 'login', loadChildren: 'app/login-page/login-page.module#LoginPageModule' },

  /*{ path: 'registration', component: RegistrationComponent },*/
  { path: 'registration', loadChildren: 'app/registration-page/registration.module#RegistrationModule' },

 // { path: 'dashboard', component: DashboardExampleComponent },
 { path: 'dashboard', loadChildren: 'app/dashboard-page/dashboard.module#DashboardModule' },

 // only for test purpose! comment on the server
 { path: 'test', loadChildren: 'app/test/test.module#TestModule' },

  //{ path: 'test', component: TestComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
