import httpStatus from "http-status";
import { ApiError } from "../../../errors";
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

export const AcademicSemesterService = {
  crateSemester,
};
