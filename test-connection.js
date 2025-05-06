import client from './db/connection.js';

try {
  const res = await client.query('SELECT NOW()');
  console.log('✅ Connected to PostgreSQL! Current time:', res.rows[0].now);
} catch (err) {
  console.error('❌ Connection failed:', err);
} finally {
  await client.end();
}
