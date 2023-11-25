import { Router } from 'express';
import diseaseRouter from './disease.routes';
import initRouter from './init.routes';
import responseGenerator from '../utils/responseGenerator';
import { PATHS } from '../constants/paths';

const router = Router();

router.get('/', async (req, res) => {
  responseGenerator(res, 200, { data: 'Hello World, You are doing great!' });
});

// INIT
router.use(PATHS.INIT, initRouter);

// DISEASE
router.use(PATHS.DISEASES, diseaseRouter);

export default router;
