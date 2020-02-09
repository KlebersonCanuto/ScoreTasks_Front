import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout, mapStateToProps } from '../../redux'
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Top(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const exit = () => {
    handleClose()
    props.logout()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link 
          to="/" 
          className="avenir white no-underline underline-hover b f3"
        >
          Inicio
        </Link>
        { props.logged && 
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
