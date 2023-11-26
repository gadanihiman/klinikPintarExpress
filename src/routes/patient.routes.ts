import { Router } from 'express';
import { 
  getAllPatient, 
} from '../controllers/patient.controller';

const router = Router();

router.get('/', getAllPatient);

export default router;
