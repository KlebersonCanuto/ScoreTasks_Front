import React, { useState } from 'react'
import { TextField, Button, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function Signup(props) {

  const initialState = {
    email: '',
    password: '',
    confirmPassword: ''
  } 

  const [data, setData] = useState(initialState)

  const submit = (event) => {
    event.preventDefault()
    props.newUser({
      variables: {...data},
      update: (proxy, { data: { addUser } }) => {
        console.log(addUser)
        setData(initialState);
      }
    }).catch(() => {
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
        Cadastro
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
          type="email"
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
        <TextField
          variant="outlined"
          name="confirmPassword"
          margin="normal"
          value={data.confirmPassword}
          onChange={handleChanges}
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

const mutation = gql`
  mutation ($email: String!, $password: String!, $confirmPassword: String!){
    addUser(email: $email, password: $password, confirmPassword: $confirmPassword){
      id
      email
    }
  }
`;

export default graphql(mutation, { name: 'newUser' })(Signup)
