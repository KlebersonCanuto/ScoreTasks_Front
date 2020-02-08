import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { URL, token } from '../../utils'
import { Container } from '@material-ui/core'

function Profile() {

  const initialState = {
    email: '@',
    points: 0,
    tasksDone: 0
  }

  const [data, setData] = useState(initialState)

  useEffect(() => {
    Axios.get(`${URL}`, {
      headers: {
        'authorization': token
      }
    })
    .then((res) => {
      setData(initialState)
    })
  })

  return (
    <Container className="tc courier">
      <p className="f3 b">
        Perfil
      </p>
      <p className="f4 b">
        Email:
      </p>
      <p>{data.email}</p>
      <p className="f4 b">
        Pontos:
      </p>
      <p>{data.points} pontos</p>
      <p className="f4 b">
        Tarefas:
      </p>
      <p>{data.tasksDone} Tarefas concluidas</p>
    </Container>
  )
}

export default Profile
