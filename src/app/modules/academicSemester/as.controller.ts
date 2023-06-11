import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AcademicSemesterService } from "./as.service";

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...data } = req.body;

    const result = await AcademicSemesterService.crateSemester(data);

    next();
    res.status(200).json({
      success: true,
      message: "Academic semester is created successfully!",
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
