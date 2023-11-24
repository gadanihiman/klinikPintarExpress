import { Response } from 'express';

interface ResponseOptions {
  data?: any;
  message?: string;
  error?: any;
  meta?: any;
}

function responseGenerator(
  res: Response,
  statusCode: number,
  { data, message, error, meta }: ResponseOptions,
) {
  const isSuccess = statusCode >= 200 && statusCode < 300;
  const responseBody = {
    success: isSuccess,
    message:
      message || (isSuccess ? 'Operation successful' : 'Operation failed'),
    ...(data && { data }),
    ...(error && { error }),
    ...(meta && { meta }),
  };

  return res.status(statusCode).json(responseBody);
}

export default responseGenerator;
