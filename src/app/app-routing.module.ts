import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'form', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'test', component: TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
