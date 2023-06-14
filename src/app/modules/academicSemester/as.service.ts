import httpStatus from "http-status";
import { SortOrder } from "mongoose";
import { ApiError } from "../../../errors";
import { calculatePagination } from "../../../helpers";
import { IGenericResponse, IPaginationOption } from "../../../interfaces";
import { academicSemesterTitleCodeMapper } from "./as.constant";
import { IAcademicSemester, IAcademicSemesterFilter } from "./as.interface";
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
  filters: IAcademicSemesterFilter,
  paginationOption: IPaginationOption
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { searchTerm } = filters || {};

  const academicSemesterSearchableFields = ["title", "code", "year"];
  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: academicSemesterSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const { limit, page, skip, sortBy, sortOrder } =
    calculatePagination(paginationOption);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await AcademicSemester.find({
    $and: andCondition,
  })
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
