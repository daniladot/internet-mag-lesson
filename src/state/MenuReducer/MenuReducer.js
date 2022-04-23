import {SET_All_MENU, SET_CURRENT_MENU, SET_MENU} from "./types"

const initialState = {
    menu: [],
    allMenu: [],
    menuCurrent: [],
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU: {
            return {...state, menu: action.payload}
        }
        case SET_All_MENU: {
            return {...state, menuAll: action.payload}
        }
        case SET_CURRENT_MENU: {
            return {...state, menuCurrent: action.payload}
        }
    }
    return state
}
