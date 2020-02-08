import { LOGIN, LOGOUT } from './types'

const initialState = {
  logged: localStorage.getItem('token') ? true : false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      localStorage.setItem('token', action.token) 
      return {
        ...state,
        logged: true
      }
    case LOGOUT: 
      localStorage.clear() 
      return {
        ...state,
        logged: false
      }
    default: return state
  }
}

export default reducer