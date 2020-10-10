import { Context } from '../../models'
import { GraphQLResolveInfo } from 'graphql'
import { PHOTOS_TABLE } from '.'
import { Photo } from '../../datatypes/types'
import db from '../../app.database'

export async function getPhotos() {
  const sql = `select * from ${PHOTOS_TABLE}`
  const res = await db.promise().query(sql)

  return res[0] || []
}

export async function getPhoto(_: void, args: { id: number }, ctx: Context, info: GraphQLResolveInfo) {
  const sql = `select * from ${PHOTOS_TABLE} where id=${args.id} limit 1`
  const res = await db.promise().query(sql)
  const photos = res[0] as Photo[]

  return photos[0]
}
