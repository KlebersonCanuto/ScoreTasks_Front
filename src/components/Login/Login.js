import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login, mapStateToProps } from '../../redux'
import { TextField, Button, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { URL } from '../../utils'

function Login(props) {

  const initialState = {
    email: '',
    password: ''
  }

  const [data, setData] = useState(initialState)

  const submit = (event) => {
    event.preventDefault()
    Axios.post(`${URL}/login`, data)
    .then((res) => {
      props.login(res.data.token)
    })
  }

  const handleChanges = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
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
          name="email"
          value={data.email}
          onChange={handleChanges}
          required
          fullWidth
          label="Email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="password"
          value={data.password}
          onChange={handleChanges}
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
    login: (token) => dispatch(login(token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
