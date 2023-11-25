import * as diseaseController from '../disease.controller';
import { diseaseService } from '../../services/disease.service';
import responseGenerator from '../../utils/responseGenerator';
import { Request, Response } from 'express';

jest.mock('../../services/disease.service');
jest.mock('../../utils/responseGenerator');

describe('Disease Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject: Record<string, unknown>;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn(() => mockResponse) as any,
      json: jest.fn((result) => { responseObject = result; }) as any,
    };
  });

  describe('getAllDiseases', () => {
    it('should return all diseases and a 200 status', async () => {
      const mockData = [{ id: 1, name: 'Disease 1' }];
      (diseaseService.getAllDiseases as jest.Mock).mockResolvedValue(mockData);

      await diseaseController.getAllDiseases(mockRequest as Request, mockResponse as Response);

      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 200, { data: mockData });
    });

    it('should handle errors and return a 500 status', async () => {
      const error = new Error('Error fetching diseases');
      (diseaseService.getAllDiseases as jest.Mock).mockRejectedValue(error);

      await diseaseController.getAllDiseases(mockRequest as Request, mockResponse as Response);

      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 500, { error });
    });
  });

  describe('createDisease', () => {
    it('should create a disease and return a 201 status', async () => {
      const mockReqBody = { name: 'New Disease', picture: 'picture_url', patientId: 1 };
      mockRequest = { body: mockReqBody };

      const createdId = 123;
      (diseaseService.createDisease as jest.Mock).mockResolvedValue(createdId);

      await diseaseController.createDisease(mockRequest as Request, mockResponse as Response);

      expect(diseaseService.createDisease).toHaveBeenCalledWith('New Disease', 'picture_url', 1);
      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 201, {
        message: 'Record created successfully',
        meta: { id: createdId }
      });
    });

    it('should handle errors and return a 500 status', async () => {
      const error = new Error('Error creating disease');
      (diseaseService.createDisease as jest.Mock).mockRejectedValue(error);

      await diseaseController.createDisease(mockRequest as Request, mockResponse as Response);

      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 500, { error });
    });
  });

  describe('updateDisease', () => {
    it('should update a disease and return a 200 status', async () => {
      const mockReqBody = { name: 'Updated Disease', picture: 'updated_picture_url', patientId: 2 };
      const mockReqParams = { id: '1' };
      mockRequest = { body: mockReqBody, params: mockReqParams };

      const affectedRows = 1;
      (diseaseService.updateDisease as jest.Mock).mockResolvedValue(affectedRows);

      await diseaseController.updateDisease(mockRequest as Request, mockResponse as Response);

      expect(diseaseService.updateDisease).toHaveBeenCalledWith(1, 'Updated Disease', 'updated_picture_url', 2);
      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 200, {
        message: 'Record updated successfully',
        meta: { changes: affectedRows }
      });
    });

    it('should handle errors and return a 500 status', async () => {
      const error = new Error('Error updating disease');
      (diseaseService.updateDisease as jest.Mock).mockRejectedValue(error);

      await diseaseController.updateDisease(mockRequest as Request, mockResponse as Response);

      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 500, { error });
    });
  });

  describe('deleteDisease', () => {
    it('should delete a disease and return a 200 status', async () => {
      const mockReqParams = { id: '1' };
      mockRequest = { params: mockReqParams };

      const affectedRows = 1;
      (diseaseService.deleteDisease as jest.Mock).mockResolvedValue(affectedRows);

      await diseaseController.deleteDisease(mockRequest as Request, mockResponse as Response);

      expect(diseaseService.deleteDisease).toHaveBeenCalledWith(1);
      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 200, {
        message: 'Record deleted successfully',
        meta: { changes: affectedRows }
      });
    });

    it('should handle errors and return a 500 status', async () => {
      const error = new Error('Error deleting disease');
      (diseaseService.deleteDisease as jest.Mock).mockRejectedValue(error);

      await diseaseController.deleteDisease(mockRequest as Request, mockResponse as Response);

      expect(responseGenerator).toHaveBeenCalledWith(mockResponse, 500, { error });
    });
  });
});
