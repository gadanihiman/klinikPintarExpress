import { Router } from 'express';
import { Database } from 'sqlite3';

import createDiseaseRouter from './disease.routes';
import responseGenerator from '../utils/responseGenerator';
import { PATHS } from '../constants/paths';
import { GET_DISEASE_JOIN_PATIENT } from '../queries/diseases';

// const db = new Database(DATABASE_NAME)

// TODO split to separate module
// TODO what's the bug in this method and how to fix it?
const createRouter = (db: Database) => {
  const router = Router();
  router.get(PATHS.INIT, (req, res) => {
    // TODO sample database join?
    db.all(GET_DISEASE_JOIN_PATIENT, (error, data) => {
      if (error) {
        responseGenerator(res, 500, { error: error.message });
        return;
      }
      responseGenerator(res, 200, { data });
    });
  });

  const diseaseRouter = createDiseaseRouter(db);
  router.use(PATHS.DISEASES, diseaseRouter);

  return router;
};

export default createRouter;
