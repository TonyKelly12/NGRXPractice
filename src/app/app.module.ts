import { User } from './../../../ReduxStarter/Angular-NgRx-GettingStarted/APM-Demo4/src/app/user/user';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { ShellComponent } from './Components/shell/shell.component';
import { MenuComponent } from './Components/menu/menu.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

/* Feature Modules */
import { UserModule } from './User/user/user.module';

/* tslint:disable */

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    HttpClientModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
