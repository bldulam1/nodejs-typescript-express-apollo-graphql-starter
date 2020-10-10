import { Context } from '../../models'
import { GraphQLResolveInfo } from 'graphql'
import { PHOTOS_TABLE } from '.'
import { Photo } from '../../datatypes/types'
import { ResultSetHeader } from 'mysql2'
import db from '../../app.database'

export const createPhoto = async (_: void, args: Photo, ctx: Context, info: GraphQLResolveInfo) => {
  const sql = `INSERT INTO ${PHOTOS_TABLE} SET ?`

  const res = await db.promise().query(sql, args)
  const { insertId } = res[0] as ResultSetHeader

  // Set id
  args.id = insertId

  return args
}

export const createPhotosTable = async (_: void, args: Photo, ctx: Context, info: GraphQLResolveInfo) => {
  const sql = `
    CREATE TABLE ${PHOTOS_TABLE}(
      id            int AUTO_INCREMENT, 
      albumId       int,
      title         varchar(100),
      url           varchar(255),
      thumbnailUrl  varchar(255),
      PRIMARY KEY   (id)
    )`

  const res = await db.promise().query(sql, args)
  const resHeader = res[0] as ResultSetHeader
  return JSON.stringify(resHeader)
}
