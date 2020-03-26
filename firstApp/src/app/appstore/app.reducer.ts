import { Reducer, combineReducers } from "redux";
import { AppStateRedux } from './app.state';
import { CommonReducer } from './common/common.reducer';

const rootReducer: Reducer<AppStateRedux> = combineReducers<AppStateRedux> ({
    CommonStore : CommonReducer
})

export default rootReducer;