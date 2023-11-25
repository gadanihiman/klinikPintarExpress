import { Request, Response } from 'express';
import responseGenerator from '../utils/responseGenerator';
import { diseaseService } from '../services/disease.service';

export async function getAllDiseases(req: Request, res: Response) {
  try {
    const data = await diseaseService.getAllDiseases();
    responseGenerator(res, 200, { data });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
}

export async function createDisease(req: Request, res: Response) {
  const { name, picture, patientId } = req.body;
  try {
    const createdId = await diseaseService.createDisease(name, picture, patientId);
    responseGenerator(res, 201, { message: 'Record created successfully', meta: { id: createdId } });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
}

export async function updateDisease(req: Request, res: Response) {
  const { id } = req.params;
  const { name, picture, patientId } = req.body;
  try {
    const affectedRows = await diseaseService.updateDisease(Number(id), name, picture, patientId);
    responseGenerator(res, 200, { message: 'Record updated successfully', meta: { changes: affectedRows } });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
}

export async function deleteDisease(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const affectedRows = await diseaseService.deleteDisease(Number(id));
    responseGenerator(res, 200, { message: 'Record deleted successfully', meta: { changes: affectedRows } });
  } catch (error) {
    responseGenerator(res, 500, { error });
  }
}
