import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login, mapStateToProps } from '../../redux'
import { TextField, Button, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
    props.login()
  }

  return (
    <Container component="main" maxWidth="xs">
      <p className="f3 b courier tc">
        Entre
      </p>
      <form noValidate onSubmit={submit} autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          label="Email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          label="Senha"
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
      <Grid container>
        <Grid item>
          <Link to="/cadastro" className="no-underline underline-hover">
            <p className="blue f4">
              Cadastre-se
            </p>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
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
