import { Request, Response } from 'express';
import responseGenerator from '../utils/responseGenerator';
import { patientService } from '../services/patient.service';

export async function getAllPatient(req: Request, res: Response) {
  try {
    const data = await patientService.getAllPatients();
    responseGenerator(res, 200, { data });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
}
