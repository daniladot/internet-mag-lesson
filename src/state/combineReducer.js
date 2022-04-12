import {combineReducers} from "redux";
import {menuReducer} from "./MenuReducer/menuReducer";

export const combineReducer = combineReducers({
    menuReducer: menuReducer
})
