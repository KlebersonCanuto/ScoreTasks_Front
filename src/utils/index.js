import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'http://scoretasks.herokuapp.com/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const URL = 'https://scoretasks.herokuapp.com'
const token = localStorage.getItem('token')

export {
  URL,
  token,
  client
}