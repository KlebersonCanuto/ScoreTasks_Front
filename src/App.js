import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App(props) {
  const logged = props.logged
  return (
    <div>
      <p className="tc f1 courier"> ScoreTasks </p>
      { !logged && <Route exact path="/"> <Login/> </Route> }
      { logged && <Route exact path="/"> <Home/> </Route> }
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    logged: state.logged
  }
}


export default connect(
  mapStateToProps,
)(App)