import loginReducer from './Login/reducer'
const { createStore } = require('redux')
const store = createStore(loginReducer)

export default store

// const reduxlogger = require('redux-logger')
// const logger = reduxlogger.createLogger()
// console.log(store.getState())
// const unsubscribe = store.subscribe(() => {})
// store.dispatch(logout())
// store.dispatch(login())
// unsubscribe()