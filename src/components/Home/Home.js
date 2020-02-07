import React from 'react'
import { connect } from 'react-redux'
import { logout, mapStateToProps } from '../../redux'
import { Button, Container } from '@material-ui/core'

function Home(props) {
  return (
    <Container component="main" maxWidth="xs">
      <Button
        type="submit"
        fullWidth
        onClick={props.logout}
        variant="contained"
        color="secondary"
      >
        Sair
      </Button>
  </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

