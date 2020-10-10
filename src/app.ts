import ExpressApolloServer from './server'

const path = process.env.GRAPHQL_PATH || 'graphql'
const port = process.env.PORT

if (port) {
  ExpressApolloServer(path, port)
} else {
  console.error('PORT variable is undefined')
}
