import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
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

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOption = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   sortBy: req.query.sortBy,
    //   sortOrder: req.query.sortOrder,
    // };

    const paginationOption = pick(req.query, paginationFields);

    console.log(paginationOption);

    // const result = await AcademicSemesterService.getAllSemesters(
    //   paginationOption
    // );

    // sendResponse(res, {
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   message: "Semesters received successfully!",
    //   data: result,
    // });

    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
