import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, ContactComponent, HomeComponent, LoginComponent, NewsComponent, SignUpComponent, ServiceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
