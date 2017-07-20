import * as types from '../../constants/ActionTypes';
import indexState from '../../states/indexState';

export default function index(state = indexState, action) {
    switch (action.type) {
        case types.SET_GOODS:
            return {
                ...state,
                goods: action.data
            };
        case types.SET_GOOD:
            return {
                ...state,
                good: action.data
            };
        default:
            return state;
    }
}
