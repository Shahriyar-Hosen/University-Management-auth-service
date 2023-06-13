import { Response } from "express";

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  } | null;
};

const sendResponse = <T>(
  res: Response,
  { statusCode, success, data, message, meta }: IApiResponse<T>
): void => {
  const responseData: IApiResponse<T> = {
    statusCode: statusCode,
    success: success,
    message: message || null,
    meta: meta || null,
    data: data || null,
  };

  res.status(statusCode).json(responseData);
};

export default sendResponse;
