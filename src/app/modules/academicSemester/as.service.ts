import { IAcademicSemester } from "./as.interface";
import AcademicSemester from "./as.model";

const crateSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  crateSemester,
};
