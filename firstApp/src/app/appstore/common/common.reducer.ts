import { CommonState } from './common.state';
import * as CommonAction from './common.action'


const initialState : CommonState = {
    detailData :'',
    isShowLookup: false
}

export const CommonReducer = function (
    state: CommonState = initialState,
    action: any
): CommonState {
    switch (action.type) {

        case CommonAction.DETAIL_DATA:
            return {
                ...state,
                detailData: action.payload
            };
        case CommonAction.SHOW_LOOKUP:
             return {
                ...state,
               isShowLookup: action.payload
             };

        default:
            return state;

    }
}