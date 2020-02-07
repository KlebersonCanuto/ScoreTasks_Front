import loginReducer from './Login/reducer'
const { createStore } = require('redux')
const store = createStore(loginReducer)

export default store