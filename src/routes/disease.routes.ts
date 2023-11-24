import { Router } from 'express';
import responseGenerator from '../utils/responseGenerator';
import { Database } from 'sqlite3';
import {
  CREATE_DISEASE,
  DELETE_DISEASE,
  GET_DISEASE_JOIN_PATIENT,
  UPDATE_DISEASE,
} from '../queries/diseases';

const createDiseaseRouter = (db: Database) => {
  const router = Router();

  // GET ALL DISEASES
  router.get('/', (req, res) => {
    db.all(GET_DISEASE_JOIN_PATIENT, (err: any, data: any) => {
      responseGenerator(res, 200, { data });
    });
  });

  // CREATE DISEASE
  router.post('/', (req, res) => {
    // For simplicity, i don't validate the input
    // But in real scenario, i will validate the input using Joi
    // and maybe using middleware to sanitize the input
    const { name, picture, patientId } = req.body;

    db.run(CREATE_DISEASE, [name, picture, patientId], function (err) {
      if (err) {
        responseGenerator(res, 500, { error: err.message });
        return;
      }
      responseGenerator(res, 201, {
        message: 'Record created successfully',
        meta: { id: this.lastID },
      });
    });
  });

  // UPDATE DISEASE
  router.put('/:id', (req, res) => {
    // For simplicity, i don't validate the input
    // But in real scenario, i will validate the input using Joi
    // and maybe using middleware to sanitize the input
    const { id } = req.params;
    const { name, picture, patientId } = req.body;

    db.run(UPDATE_DISEASE, [name, picture, patientId, id], function (err) {
      if (err) {
        responseGenerator(res, 500, { error: err.message });
        return;
      }
      responseGenerator(res, 200, {
        message: 'Record updated successfully',
        meta: { changes: this.changes },
      });
    });
  });

  // DELETE DISEASE
  router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.run(DELETE_DISEASE, id, function (err) {
      if (err) {
        responseGenerator(res, 500, { error: err.message });
        return;
      }
      responseGenerator(res, 200, {
        message: 'Record deleted successfully',
        meta: { changes: this.changes },
      });
    });
  });

  return router;
};

export default createDiseaseRouter;
