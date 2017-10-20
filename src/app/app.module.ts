import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {Storage} from '../app/model/storage.service';
import { LogInComponent } from './log-in/log-in.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    LogInComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Angular2FontawesomeModule,
    AppRoutingModule
  ],
  providers: [Storage],
  bootstrap: [AppComponent]
})
export class AppModule { }
