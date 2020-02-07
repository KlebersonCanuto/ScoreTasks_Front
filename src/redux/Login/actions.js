import { LOGIN, LOGOUT } from './types'

const login = () => {
  return {
    type: LOGIN,
    info: 'Login completed'
  }
}

const logout = () => {
  return {
    type: LOGOUT,
    info: 'Logged out'
  }
}

export {
  login,
  logout,
}
