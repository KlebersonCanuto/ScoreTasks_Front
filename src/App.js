import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { mapStateToProps } from './redux'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'

function App(props) {
  const logged = props.logged
  return (
    <div>
      <p className="tc f1 courier"> ScoreTasks </p>
      { !logged && <Route exact path="/"> <Login/> </Route> }
      { logged && <Route exact path="/"> <Home/> </Route> }
      { !logged && <Route exact path="/cadastro"> <Signup/> </Route> }
    </div>
  )
}

export default connect(
  mapStateToProps,
)(App)