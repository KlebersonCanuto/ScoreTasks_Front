import React, { useState } from 'react'
import { TextField, Button, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <p className="f3 b courier tc">
        Cadastro
      </p>
      <form noValidate onSubmit={submit} autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          type="email"
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
        <TextField
          variant="outlined"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          required
          label="Confirme a senha"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
        >
          Cadastrar
        </Button>
      </form>
      <Grid container>
        <Grid item>
          <Link to="/" className="no-underline underline-hover">
            <p className="blue f4">
              Já possui uma conta? Entrar
            </p>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Signup
