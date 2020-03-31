import { Injectable } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const DETAIL_DATA ='DETAIL_DATA';
export const SHOW_LOOKUP ='SHOW_LOOKUP';
export const DATA_FROM_MY_COMPO ='DATA_FROM_MY_COMPO';


@Injectable ({
    providedIn :"root"
})

export class CommonAction {

  
    constructor() {

    }



    showLookup() {
        return { type: SHOW_LOOKUP, payload: true };
    }
    hideLookup() {
        return { type: SHOW_LOOKUP, payload: false };
    }
    dataFromMyCompo(data) {
        return { type: DATA_FROM_MY_COMPO, payload: data };
    }

}