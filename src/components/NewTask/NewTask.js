import React, { useState } from 'react'
import Axios from 'axios'
import { URL, token } from '../../utils'
import { TextField, Button, Container, FormControlLabel, Checkbox } from '@material-ui/core'

function NewTask() {

  const initialState = {
    name: '',
    description: '',
    points: '',
    positive: true
  } 

  const [data, setData] = useState(initialState)

  const submit = (event) => {
    event.preventDefault()
    Axios.post(`${URL}/task`, data, {
      headers: {
        'authorization': token
      }
    })
    .then((_) => {
      setData(initialState);
    })
  }

  const handleChanges = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleToggle = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.checked
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <p className="f3 b courier tc">
        Nova tarefa
      </p>
      <form noValidate onSubmit={submit} autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          name="name"
          value={data.name}
          onChange={handleChanges}
          required
          fullWidth
          type="text"
          label="Nome"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="description"
          value={data.description}
          onChange={handleChanges}
          fullWidth
          multiline
          required
          label="Descrição"
          type="text"
        />
        <TextField
          variant="outlined"
          name="points"
          margin="normal"
          value={data.points}
          onChange={handleChanges}
          fullWidth
          required
          label="Pontos"
          type="number"
        />
        <FormControlLabel
          control={
            <Checkbox checked={data.positive} onChange={handleToggle} name="positive" value={!data.positive} />
          }
          label="Positiva"
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
    </Container>
  )
}

export default NewTask
