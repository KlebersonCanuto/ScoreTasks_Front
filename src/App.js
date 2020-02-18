import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Top from './components/Top/Top'
import Profile from './components/Profile/Profile'
import NewTask from './components/NewTask/NewTask'
import './Styles.css'

function App() {
  const logged = useSelector(state => state.logged)
  return (
    <div>
      <Top/>
      <p className="tc f1 courier"> ScoreTasks </p>
      { !logged && <Route exact path="/"> <Login/> </Route> }
      { !logged && <Route exact path="/cadastro"> <Signup/> </Route> }
      { logged && <Route exact path="/"> <Home/> </Route> }
      { logged && <Route exact path="/perfil"> <Profile/> </Route> }
      { logged && <Route exact path="/nova_tarefa"> <NewTask/> </Route> }
    </div>
  )
}

export default App