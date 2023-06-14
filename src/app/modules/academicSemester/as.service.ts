import httpStatus from "http-status";
import { SortOrder } from "mongoose";
import { ApiError } from "../../../errors";
import { calculatePagination } from "../../../helpers";
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
  const { limit, page, skip, sortBy, sortOrder } =
    calculatePagination(paginationOption);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await AcademicSemester.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

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
