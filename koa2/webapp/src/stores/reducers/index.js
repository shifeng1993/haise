import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import index from './index/index';
const reducers = {
    index
};

export default combineReducers({
    ...reducers,
    routing: routerReducer
});
