import { all } from 'sequelize/types/lib/operators'
import mysql from 'mysql2'

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export default db