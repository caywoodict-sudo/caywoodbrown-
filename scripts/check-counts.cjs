const path = require('path');
const { Pool } = require(path.resolve(__dirname, '../node_modules/.pnpm/pg@8.20.0/node_modules/pg'));

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_ZHkfXNM4jys2@ep-mute-math-b4n1z651-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    const tables = ['users', 'events', 'programs', 'submissions', 'testimonials', 'posts', 'media'];
    for (const t of tables) {
      const res = await pool.query(`SELECT count(*) as count FROM ${t}`);
      console.log(`Table ${t}: ${res.rows[0].count} rows`);
    }
  } catch (e) {
    console.error('Error:', e);
  } finally {
    await pool.end();
  }
}

main();
