import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemesterService } from "./as.service";

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...data } = req.body;

    const result = await AcademicSemesterService.crateSemester(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic semester is created successfully!",
      data: result,
    });

    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
};
