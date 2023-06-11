import { Response } from "express";

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
};

const sendResponse = <T>(
  res: Response,
  { statusCode, success, data, message }: IApiResponse<T>
): void => {
  const responseData: IApiResponse<T> = {
    statusCode: statusCode,
    success: success,
    message: message || null,
    data: data || null,
  };

  res.status(statusCode).json(responseData);
};

export default sendResponse;
