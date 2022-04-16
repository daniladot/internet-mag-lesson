import {
    FETCH_ALL_MENU_ERROR,
    FETCH_ALL_MENU_REQUEST,
    FETCH_ALL_MENU_SUCCESS,
    FETCH_MENU_ERROR,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    SET_All_MENU,
    SET_MENU
} from "./types";

export const setMenu = (value) => ({type: SET_MENU, payload: value})

export const setAllMenu = (value) => ({type: SET_All_MENU, payload: value})

export const fetchMenuRequest = () => ({type: FETCH_MENU_REQUEST})
export const fetchMenuSuccess = () => ({type: FETCH_MENU_SUCCESS})
export const fetchMenuError = (err) => ({type: FETCH_MENU_ERROR, payload: err})

export const fetchAllMenuRequest = () => ({type: FETCH_ALL_MENU_REQUEST})
export const fetchAllMenuSuccess = () => ({type: FETCH_ALL_MENU_SUCCESS})
export const fetchAllMenuError = (err) => ({type: FETCH_ALL_MENU_ERROR, payload: err})

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
export const fetchAllMenu = () => {
    return dispatch => {
        dispatch(fetchAllMenuRequest())

        fetch('https://roll-store.herokuapp.com/menu/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(fetchAllMenuSuccess())
                dispatch(setAllMenu(res))
            })
            .catch(err => dispatch(fetchAllMenuError(err)))
    }
}
