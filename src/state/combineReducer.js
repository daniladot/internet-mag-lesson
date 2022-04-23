import {combineReducers} from "redux";
import {menuReducer} from "./MenuReducer/MenuReducer";
import {basketReducer} from "./BasketReducer/basketReducer";

export const combineReducer = combineReducers({
    menuReducer: menuReducer,
    basketReducer: basketReducer
})
