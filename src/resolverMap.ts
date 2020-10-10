import { Context } from './models';
import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
      console.log(ctx);
      return `👋 Hello world! 👋`;
    },
  },
};

export default resolverMap;
