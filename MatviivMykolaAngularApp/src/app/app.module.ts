import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule, MatButtonModule, MatTableModule, MatInputModule, MatIconModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ShowpasswordComponent } from './components/showpassword/showpassword.component';
import { SearchPipe } from './pipes/search.pipe';
import { ForloggedGuard } from './guards/forlogged.guard';
import { FornotloggedGuard } from './guards/fornotlogged.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent,
    UsersComponent,
    ForgotpasswordComponent,
    ShowpasswordComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [ForloggedGuard, FornotloggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

