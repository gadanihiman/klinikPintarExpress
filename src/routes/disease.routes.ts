import { Router } from 'express';
import { 
  getAllDiseases, 
  createDisease, 
  updateDisease, 
  deleteDisease 
} from '../controllers/disease.controller';

const router = Router();

router.get('/', getAllDiseases);
router.post('/', createDisease);
router.put('/:id', updateDisease);
router.delete('/:id', deleteDisease);

export default router;
