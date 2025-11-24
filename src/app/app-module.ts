import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Child } from './child/child';
import { Login } from './login/login';
import { Products } from './products/products';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Header,
    Home,
    Contact,
    Child,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    Products 
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
