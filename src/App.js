import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { mapStateToProps } from './redux'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Top from './components/Top/Top'
import Profile from './components/Profile/Profile'

function App(props) {
  const logged = props.logged
  return (
    <div>
      <Top/>
      <p className="tc f1 courier"> ScoreTasks </p>
      { !logged && <Route exact path="/"> <Login/> </Route> }
      { !logged && <Route exact path="/cadastro"> <Signup/> </Route> }
      { logged && <Route exact path="/"> <Home/> </Route> }
      { logged && <Route exact path="/perfil"> <Profile/> </Route> }
    </div>
  )
}

export default connect(
  mapStateToProps,
)(App)