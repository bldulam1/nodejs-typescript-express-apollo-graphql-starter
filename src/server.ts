import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'
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

  const httpServer = createServer(app)

  httpServer.listen({ port }, (): void =>
    console.log(`\nGraphQL is now running on http://localhost:${port}${server.graphqlPath}`)
  )
}
