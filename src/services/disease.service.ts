import { ResultSetHeader } from 'mysql2';
import pool from '../utils/databaseConnection';
import {
  CREATE_DISEASE,
  DELETE_DISEASE,
  GET_DISEASE_JOIN_PATIENT,
  UPDATE_DISEASE,
} from '../queries/diseases';

const diseaseService = {
  async getAllDiseases() {
    const connection = await pool.getConnection();
    try {
      const [data] = await connection.query(GET_DISEASE_JOIN_PATIENT);
      return data;
    } finally {
      connection.release();
    }
  },

  async createDisease(name: string, picture: string, patientId: number) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(CREATE_DISEASE, [name, picture, patientId]);
      return (result as ResultSetHeader).insertId;
    } finally {
      connection.release();
    }
  },

  async updateDisease(id: number, name: string, picture: string, patientId: number) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(UPDATE_DISEASE, [name, picture, patientId, id]);
      return (result as ResultSetHeader).affectedRows;
    } finally {
      connection.release();
    }
  },

  async deleteDisease(id: number) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.query(DELETE_DISEASE, [id]);
      return (result as ResultSetHeader).affectedRows;
    } finally {
      connection.release();
    }
  }
};

export { diseaseService };
