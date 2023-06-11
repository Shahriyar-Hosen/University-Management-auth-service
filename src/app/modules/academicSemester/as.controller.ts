import { RequestHandler } from "express";
import { AcademicSemesterService } from "./as.service";

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...data } = req.body;

    const result = await AcademicSemesterService.crateSemester(data);

    res.status(200).json({
      success: true,
      message: "Academic semester is created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
