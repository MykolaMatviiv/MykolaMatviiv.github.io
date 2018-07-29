import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForloggedGuard } from './guards/forlogged.guard';
import { LoginComponent } from './components/login/login.component';
import { FornotloggedGuard } from './guards/fornotlogged.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ShowpasswordComponent } from './components/showpassword/showpassword.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ForloggedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [FornotloggedGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [FornotloggedGuard]
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    canActivate: [FornotloggedGuard],
    children:[
      {
        path: 'showpassword',
        component: ShowpasswordComponent,
        canActivate: [FornotloggedGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
