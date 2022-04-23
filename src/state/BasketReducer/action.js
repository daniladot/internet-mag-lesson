import {ADD_BASKET, REMOVE_BASKET} from "./types";

export const addBasket = (value) => ({type: ADD_BASKET, payload: value})
export const removeBasket = (value) => ({type: REMOVE_BASKET, payload: value})
