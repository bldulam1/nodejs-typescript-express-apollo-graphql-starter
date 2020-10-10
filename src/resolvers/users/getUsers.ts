import db from '../../app.database'

export default async function () {
  const sql = 'select * from users'
  const res = await db.promise().query(sql)
  return res[0]
}
