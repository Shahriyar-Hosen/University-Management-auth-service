import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { IAcademicSemester } from "./as.interface";
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

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOption = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllSemesters(
      paginationOption
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semesters retrieved successfully!",
      data: result.data,
      meta: result.meta,
    });

    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
