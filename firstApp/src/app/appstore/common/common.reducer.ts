import { CommonState } from './common.state';
import * as CommonAction from './common.action'


const initialState : CommonState = {
    detailData :''
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
            }

        default:
            return state;

    }
}