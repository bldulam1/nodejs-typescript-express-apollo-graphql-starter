import { Context } from './models'
import { GraphQLResolveInfo } from 'graphql'
import { IResolvers } from 'graphql-tools'

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
      return `👋 Hello world! 👋`
    },
    ping(): string {
      return 'pong'
    },
  },
}

export default resolverMap
