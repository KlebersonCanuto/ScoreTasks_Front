import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux'
import { TextField, Button, Container } from '@material-ui/core'

function Login(props) {
  const submit = (event) => {
    event.preventDefault()
    props.login()
  }

  return (
    <Container component="main" maxWidth="xs">
      <form noValidate onSubmit={submit} autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          label="Password"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
        >
          Entrar
        </Button>
      </form>
    </Container>
  )
}

const mapStateToProps = state => {
  return { 
    logged: state.logged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
