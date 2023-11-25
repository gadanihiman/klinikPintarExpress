import responseGenerator from '../responseGenerator';

describe('responseGenerator', () => {
  it('should return a correct response object', () => {
    const mockResponse: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    responseGenerator(mockResponse, 200, { message: 'success' });

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'success', "success": true });
  });
});
