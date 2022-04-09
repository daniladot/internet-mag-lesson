import {combineReducers} from "redux";
import {pokeReducer} from "./pokeReducer/pokeReducer";

export const combineReducer = combineReducers({
    pokeReducer: pokeReducer
})
