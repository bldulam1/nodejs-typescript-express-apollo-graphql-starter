import 'graphql-import-node'

import * as typeDefs from './schema/schema.graphql'

import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolverMap'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
