import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import { client } from './utils' 

ReactDOM.render(<Router> <Provider store={store}> <ApolloProvider client={client}> <App/> </ApolloProvider> </Provider> </Router>, document.getElementById('app'))

serviceWorker.unregister()
