import './../actions/actions';
import {combineReducers} from 'redux';
var initialState = {};

function createNewUser(state = initialState, action) {
    return state;
}

const rootReducers = combineReducers({
    createNewUser
});

export default rootReducers;