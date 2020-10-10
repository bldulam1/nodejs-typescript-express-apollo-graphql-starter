import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
import db from './app.database'
import depthLimit from 'graphql-depth-limit'
import express from 'express'
import schema from './schema'

export default function ExpressApolloServer(graphqlPath: string, port: number | string) {
  const app = express()
  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    playground: true,
  })

  app.use('*', cors())
  app.use(compression())
  server.applyMiddleware({ app, path: `/${graphqlPath}` })

  console.log('Connecting to the database')
  db.connect((err) => {
    if (err) throw err

    console.log('MySQL connected')
    const url = `http://localhost:${port}${server.graphqlPath}`
    const message = `\nGraphQL is now running on ${url}`
    createServer(app).listen({ port }, () => console.log(message))
  })
}
