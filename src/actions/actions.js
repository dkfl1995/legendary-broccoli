import './../constants/constants';
import { RECEIVE_RECIPES, RECEIVE_RECIPES_FAILED, RECEIVE_RECEIVE_ON } from './../constants/constants';

function receiveRecipes(recipes){
    return {
        type: RECEIVE_RECIPES,
        recipes
    };
}

function receiveFailed(bool){
    return {
        type: RECEIVE_RECIPES_FAILED,
        isFailed: bool
    };
}

function receiving(bool){
    return {
        type: RECEIVE_RECEIVE_ON,
        isOn: bool
    };
}

function requestLogin(user){
    
}