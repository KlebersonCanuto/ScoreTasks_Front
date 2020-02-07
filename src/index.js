import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router> <Provider store={store}> <App/> </Provider> </Router>, document.getElementById('app'))

serviceWorker.unregister()
