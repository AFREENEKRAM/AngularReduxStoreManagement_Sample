import { InjectionToken } from '@angular/core';
import { AppStateRedux } from './app.state';
import { StoreEnhancer, createStore, Store } from 'redux';
import { default as reducer} from './app.reducer'
import thunk from 'redux-thunk';
export const appStore = new InjectionToken('app.store');

// const devtool : StoreEnhancer<AppStateRedux> = window['devToolsExtension'] 
// ? window['devToolsExtension']() : f => f;

// const middleware = [thunk];

export function createAppStore() : Store<AppStateRedux> {
    return createStore<AppStateRedux, null, null , null>(reducer);
}

export const appStoreProvider = [
    {
        provide: appStore , useFactory: createAppStore
    }
]