import React, { useState, useEffect } from 'react'
import { Container, Grid, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Task from './Task'
import { URL, token } from '../../utils'

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`${URL}/task`, {
      headers: {
        'authorization': token
      }
    })
    .then((res) => {
      setData(res.data.data)
    })
  }, [])

  return (
    <Container>
      <p className="tc f4 courier">
        Seja bem-vindo
      </p>
      <p className="tc">
        <Link to="nova_tarefa">
          <Fab color="secondary" aria-label="add">
            <Add/>
          </Fab>
        </Link>
      </p>
      <Grid container justify="center" spacing={1}>
        {
        data.map((e, index) => 
          <Task key={index} task={e}/>
        )
        }
      </Grid>
    </Container>
  )
}

export default Home

