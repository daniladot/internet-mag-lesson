import {FETCH_MENU_ERROR, FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, SET_MENU} from "./types";

export const setMenu = (value) => {
    return ({type: SET_MENU, payload: value})
}

export const fetchMenuRequest = () => {
    return ({type: FETCH_MENU_REQUEST})
}

export const fetchMenuSuccess = () => {
    return ({type: FETCH_MENU_SUCCESS})
}

export const fetchMenuError = (err) => {
    return ({type: FETCH_MENU_ERROR, payload: err})
}

export const fetchMenu = () => {
    return dispatch => {
        dispatch(fetchMenuRequest())

        fetch('https://roll-store.herokuapp.com/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(fetchMenuSuccess())
                dispatch(setMenu(res))
            })
            .catch(err => dispatch(fetchMenuError(err)))
    }
}
