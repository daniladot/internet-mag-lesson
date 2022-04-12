import { SET_MENU } from './types'

const initialState = {
  menu: [],
}

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU: {
      return { ...state, menu: action.payload }
    }
  }
  return state
}
