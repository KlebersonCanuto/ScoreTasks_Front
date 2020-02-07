import React from 'react'
import { TextField, Button, Container } from '@material-ui/core';

function Login() {
  const submit = (event) => {
    event.preventDefault()
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

export default Login
