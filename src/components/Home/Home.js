import React from 'react'
import { Button, Container } from '@material-ui/core';

function Home() {
  
  const submit = (event) => {
    event.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <Button
        type="submit"
        fullWidth
        onClick={submit}
        variant="contained"
        color="secondary"
      >
        Sair
      </Button>
  </Container>
  )
}

export default Home
