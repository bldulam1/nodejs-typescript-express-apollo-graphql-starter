import { Context } from './models'
import { GraphQLResolveInfo } from 'graphql'
import { IResolvers } from 'graphql-tools'
import { User } from './datatypes/types'
import createUser from './resolvers/users/createUser'
import db from './app.database'
import getUsers from './resolvers/users/getUsers'

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
      return `👋 Hello world! 👋`
    },
    users: getUsers,
  },
  Mutation: {
    createUser: createUser,
  },
}

export default resolverMap
