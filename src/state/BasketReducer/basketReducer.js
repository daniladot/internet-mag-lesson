import {ADD_BASKET, REMOVE_BASKET} from "./types"

const initialState = []

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET: {
            if (state.findIndex(item => item.name === action.payload.name) !== -1) {
                let copy = [...state]
                copy[state.findIndex(item => item.name === action.payload.name)].count++
                return copy
            } else {
                return [...state, action.payload]
            }
        }
        case REMOVE_BASKET: {
            if (state.findIndex(item => item.name === action.payload) !== -1) {
                let copy = [...state]
                if (copy[state.findIndex(item => item.name === action.payload)].count === 0) {
                    copy.splice(state.findIndex(item => item.name === action.payload), 1)
                } else {
                    copy[state.findIndex(item => item.name === action.payload)].count--
                }
                return copy
            }
            return [...state]
        }

    }
    return state
}
