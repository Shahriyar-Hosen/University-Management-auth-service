import httpStatus from "http-status";
import { ApiError } from "../../../errors";
import { IGenericResponse, IPaginationOption } from "../../../interfaces";
import { academicSemesterTitleCodeMapper } from "./as.constant";
import { IAcademicSemester } from "./as.interface";
import AcademicSemester from "./as.model";

const crateSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Semester Code");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemesters = async (
  paginationOption: IPaginationOption
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOption || {};
  const skip = (page - 1) * limit;

  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);

  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  crateSemester,
  getAllSemesters,
};
