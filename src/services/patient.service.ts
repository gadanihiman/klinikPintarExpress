import { ResultSetHeader } from 'mysql2';
import pool from '../utils/databaseConnection';
import {
  GET_LIST_PATIENT,
} from '../queries/patients';

const patientService = {
  async getAllPatients() {
    const connection = await pool.getConnection();
    try {
      const [data] = await connection.query(GET_LIST_PATIENT);
      return data;
    } finally {
      connection.release();
    }
  },
};

export { patientService };
