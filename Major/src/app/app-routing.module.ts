import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

import {SignupFormComponent} from './signup-form/signup-form.component'; 
import {ProfileComponent} from './Profile/Profile.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {BloggerComponent} from './blogger/blogger.component';
import {TrendsComponent} from './Trends/Trends.component'
const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'}, 

{ path: 'home', component: HomeComponent},
{path: 'blogger', component: BloggerComponent},
{ path: 'login', component: LoginComponent},
{path: 'signup-form', component: SignupFormComponent},
{path: 'Profile', component: ProfileComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'Trends', component: TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
