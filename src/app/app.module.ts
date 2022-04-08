import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { NavleftComponent } from './components/navleft/navleft.component';
import { AuthButtonComponent } from "./components/auth-button-component/auth-button-component.component";

import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './components/user-profile-component/user-profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavleftComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-zwcx99w5.us.auth0.com',
      clientId: 'd5ZKs9CM2PEaIdYQc0AZynJQIr6T6qHh'
    }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
