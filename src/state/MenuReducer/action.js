import {
    FETCH_ERROR,
    FETCH_REQUEST, FETCH_SUCCESS,
    SET_All_MENU, SET_CURRENT_MENU,
    SET_MENU
} from "./types";

export const setMenu = (value) => ({ type: SET_MENU, payload: value })

export const setAllMenu = (value) => ({ type: SET_All_MENU, payload: value })

export const setCurrentMenu = (value) => ({ type: SET_CURRENT_MENU, payload: value })


export const fetchRequest = () => ({ type: FETCH_REQUEST })
export const fetchSuccess = () => ({ type: FETCH_SUCCESS })
export const fetchError = (err) => ({ type: FETCH_ERROR, payload: err })

export const fetchMenu = () => {
    return dispatch => {
        dispatch(fetchRequest())

        fetch("https://roll-store.herokuapp.com/")
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(fetchSuccess())
                dispatch(setMenu(res))
            })
            .catch(err => dispatch(fetchError(err)))
    }
}
export const fetchAllMenu = () => {
    return dispatch => {
        dispatch(fetchRequest())

        fetch("https://roll-store.herokuapp.com/menu/")
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(fetchSuccess())
                dispatch(setAllMenu(res))
            })
            .catch(err => dispatch(fetchError(err)))
    }
}

export const fetchItemsMenu = (url) => {
    return dispatch => {
        dispatch(fetchRequest())

        fetch(`https://roll-store.herokuapp.com/menu/${url}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(fetchSuccess())
                dispatch(setCurrentMenu(res))
            })
            .catch(err => dispatch(fetchError(err)))
    }
}
