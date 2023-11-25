import { Router } from 'express';
import responseGenerator from '../utils/responseGenerator';
import { diseaseService } from '../services/disease.service';

const router = Router();

// INIT
router.get('/', async (req, res) => {
  try {
    const data = await diseaseService.getAllDiseases();
    responseGenerator(res, 200, { data });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
});

export default router;
