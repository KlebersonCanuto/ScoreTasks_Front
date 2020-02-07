import { LOGIN, LOGOUT } from './types'
import { login, logout } from './actions'
const { createStore, applyMiddleware } = require('redux')
const reduxlogger = require('redux-logger')

const logger = reduxlogger.createLogger()

const initialState = {
  logged: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN: return {
      ...state,
      logged: true
    }
    case LOGOUT: return {
      ...state,
      logged: false
    }
    default: return state
  }
}

export default reducer
const store = createStore(reducer, applyMiddleware(logger))
console.log(store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(logout())
store.dispatch(login())
unsubscribe()