import { Router } from 'express';
import mysql from 'mysql2/promise';
import responseGenerator from '../utils/responseGenerator';
import { GET_DISEASE_JOIN_PATIENT } from '../queries/diseases';
import { DATABASE_CONFIG } from '../constants/database';

const router = Router();

// INIT
router.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DATABASE_CONFIG);
    const [data] = await connection.execute(GET_DISEASE_JOIN_PATIENT);
    connection.end();

    responseGenerator(res, 200, { data });
  } catch (error) {
    console.error('Database error:', error);
    responseGenerator(res, 500, { error });
  }
});

export default router;
