import { combineReducers } from 'redux';

import AppReducer from './components/AppReducer';

const RootReducer = combineReducers({
    testReducer: AppReducer
});

export default RootReducer;
