import { Context } from '../../models'
import { GraphQLResolveInfo } from 'graphql'
import { ResultSetHeader } from 'mysql2'
import { User } from '../../datatypes/types'
import db from '../../app.database'

export default async (_: void, args: User, ctx: Context, info: GraphQLResolveInfo) => {
  const sql = 'INSERT INTO users SET ?'

  // Set registration date
  args.register_date = new Date(args.register_date)

  const res = await db.promise().query(sql, args)
  const resHeader = res[0] as ResultSetHeader

  // Set id
  args.id = resHeader.insertId

  return args
}
