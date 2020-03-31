import { CommonState } from './common.state';
import * as CommonAction from './common.action'


const initialState : CommonState = {
   
    isShowLookup: false,
    dataFromMyCompo:''
}

export const CommonReducer = function (
    state: CommonState = initialState,
    action: any
): CommonState {
    switch (action.type) {

       
        case CommonAction.SHOW_LOOKUP:
             return {
                ...state,
               isShowLookup: action.payload
             };
        case CommonAction.DATA_FROM_MY_COMPO:
             return {
                ...state,
               dataFromMyCompo: action.payload
             };

        default:
            return state;

    }
}