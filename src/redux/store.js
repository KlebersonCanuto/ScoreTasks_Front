import loginReducer from './Login/reducer'
import { createStore } from 'redux'

const store = createStore(loginReducer)

export default store