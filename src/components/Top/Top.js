import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux'
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Top() {
  const [anchorEl, setAnchorEl] = useState(null);
  const logged = useSelector(state => state.logged)  
  const dispatch = useDispatch()

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function exit(){
    handleClose()
    dispatch(logout())
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <p className="flex-grow-1">
          <Link 
            to="/" 
            className="avenir white no-underline underline-hover b f3 flex-grow-1"
          >
            Inicio
          </Link>
        </p>
        { logged && 
          <div>
            <IconButton
              color="inherit"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/perfil" className="black no-underline">
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
              </Link>
              <Link to="/" className="black no-underline">
                <MenuItem onClick={exit}>Sair</MenuItem>
              </Link>
            </Menu>
          </div>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Top
