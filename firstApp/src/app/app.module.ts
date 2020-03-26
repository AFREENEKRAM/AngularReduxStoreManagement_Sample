import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import rootReducer from './appstore/app.reducer';
import { ReduxDevTools } from '@angular-redux/store/components/dev-tools';
import { AppStateRedux } from './appstore/app.state';
import { appStoreProvider } from './appstore/app.store';
import { MycomponentComponent } from './appstore/mycomponent/mycomponent.component';
import thunk from 'redux-thunk';
@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [appStoreProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux : NgRedux<any>,

  ){
    ngRedux.configureStore(rootReducer, {}, [thunk], [])

  }
 }
