import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {InterceptorModule} from './interceptor.module';
import { ProfileComponent } from './Profile/Profile.component';
import {BloggerComponent} from './blogger/blogger.component';
import { TrendsComponent } from './Trends/Trends.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    SignupFormComponent,
    
    ForgotPasswordComponent,
    ProfileComponent,
    BloggerComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
