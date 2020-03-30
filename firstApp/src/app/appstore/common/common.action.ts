import { Injectable } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const DETAIL_DATA ='DETAIL_DATA';
export const SHOW_LOOKUP ='SHOW_LOOKUP';

@Injectable ({
    providedIn :"root"
})

export class CommonAction {

    data: any;
    constructor() {

    }

    getDetail () {
        
        return(dispatch,getState) => {

            this.data = 'afreen';

            dispatch( this.detail(this.data));
        }
        
    }


    detail (data) {
        return { type: DETAIL_DATA, payload: data }
    }

    showLookup() {
        return { type: SHOW_LOOKUP, payload: true };
    }
    hideLookup() {
        return { type: SHOW_LOOKUP, payload: false };
    }

}