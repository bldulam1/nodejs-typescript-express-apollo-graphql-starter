import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
import depthLimit from 'graphql-depth-limit'
import express from 'express'
import schema from './schema'

export default function ExpressApolloServer(path = 'graphql', port = 3000) {
  const app = express()
  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    playground: true,
  })

  app.use('*', cors())
  app.use(compression())
  server.applyMiddleware({ app, path })

  const httpServer = createServer(app)

  httpServer.listen({ port }, (): void =>
    console.log(`\nGraphQL is now running on http://localhost:${port}/${path}`)
  )
}
