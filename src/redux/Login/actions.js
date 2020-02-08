import { LOGIN, LOGOUT } from './types'

const login = (token) => {
  return {
    type: LOGIN,
    token: token,
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
