import React from 'react'
import { Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {
    const logged = false
    return (
    <div>
      <p className="tc f1 courier"> ScoreTasks </p>
      { !logged && <Route exact path="/"> <Login/> </Route> }
      { logged && <Route exact path="/"> <Home/> </Route> }
    </div>
  )
}

export default App