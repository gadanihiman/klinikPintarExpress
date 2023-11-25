import pool from '../src/utils/databaseConnection';
import {
  CREATE_PATIENTS_TABLE,
  CREATE_DISEASES_TABLE,
} from '../src/queries/migrations';

async function migrate() {
  const connection = await pool.getConnection();
  try {
    await connection.query(CREATE_PATIENTS_TABLE);
    await connection.query(CREATE_DISEASES_TABLE);
    console.log('Migration completed successfully.');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    connection.release();
  }
}

migrate();
