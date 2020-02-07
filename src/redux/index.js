export { login, logout } from './Login/actions'

export const mapStateToProps = state => {
  return { 
    logged: state.logged
  }
}