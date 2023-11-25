import { Router } from 'express';
import responseGenerator from '../utils/responseGenerator';
import mysql from 'mysql2/promise';
import { DATABASE_CONFIG } from '../constants/database';
import {
  CREATE_DISEASE,
  DELETE_DISEASE,
  GET_DISEASE_JOIN_PATIENT,
  UPDATE_DISEASE,
} from '../queries/diseases';

const router = Router();

// GET ALL DISEASES
router.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DATABASE_CONFIG);
    const [data] = await connection.execute(GET_DISEASE_JOIN_PATIENT);
    connection.end();
    responseGenerator(res, 200, { data });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
});

// CREATE DISEASE
router.post('/', async (req, res) => {
  const { name, picture, patientId } = req.body;
  try {
    const connection = await mysql.createConnection(DATABASE_CONFIG);
    const [result] = await connection.execute(CREATE_DISEASE, [name, picture, patientId]);
    connection.end();
    responseGenerator(res, 201, {
      message: 'Record created successfully',
      // meta: { id: result.insertId },
    });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
});

// UPDATE DISEASE
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, picture, patientId } = req.body;
  try {
    const connection = await mysql.createConnection(DATABASE_CONFIG);
    const [result] = await connection.execute(UPDATE_DISEASE, [name, picture, patientId, id]);
    connection.end();
    responseGenerator(res, 200, {
      message: 'Record updated successfully',
      // meta: { changes: result.affectedRows },
    });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
});

// DELETE DISEASE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await mysql.createConnection(DATABASE_CONFIG);
    const [result] = await connection.execute(DELETE_DISEASE, [id]);
    connection.end();
    responseGenerator(res, 200, {
      message: 'Record deleted successfully',
      // meta: { changes: result.affectedRows },
    });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
});

export default router;
