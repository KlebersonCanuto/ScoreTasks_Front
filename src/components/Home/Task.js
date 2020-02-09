import React, { useState } from 'react'
import { Card, CardContent, Grid, Switch, FormControlLabel } from '@material-ui/core'
import Axios from 'axios'
import { URL, token } from '../../utils'

function Task(props) {

  const [checked, setChecked] = useState(props.task.done)
  
  const handleChange = (event) => {
    Axios.post(`${URL}/task/${props.task._id}`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    })
    .then((res) => {
      setChecked(res.data.data.done)
    })
  };
  
  return (
    <Grid item xs={2}>
      <Card>
        <CardContent className="tc" overflow="visible">
          <p>
            <span className="f4 b">
              {props.task.name}
            </span> {' - '}
            <span className="f5">
              {props.task.points} pontos
            </span>
          </p>
          <p>
            <FormControlLabel
              control={
                <Switch checked={checked} onChange={handleChange} />
              }
              label="Concluida"
            />
          </p>
          <p className="f4">
            {props.task.description}
          </p>

        </CardContent>
      </Card>
    </Grid>
  )
}

export default Task
