// db/connection.js
import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  user: 'krystopherv',
  password: 'KHer67314!!!',
  host: 'localhost',
  port: 5432,
  database: 'employee_db',
});

export default db;
