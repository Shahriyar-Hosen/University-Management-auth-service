import { z } from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterMonths,
  AcademicSemesterTitles,
} from "./as.constant";
import {
  IAcademicSemesterCode,
  IAcademicSemesterMonths,
  IAcademicSemesterTitles,
} from "./as.interface";

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(
      [...AcademicSemesterTitles] as [string, ...IAcademicSemesterTitles[]],
      {
        required_error: "Title in required!",
      }
    ),
    code: z.enum(
      [...AcademicSemesterCode] as [string, ...IAcademicSemesterCode[]],
      {
        required_error: "Code in required!",
      }
    ),
    year: z.number({
      required_error: "Year in required!",
    }),
    startMonth: z.enum(
      [...AcademicSemesterMonths] as [string, ...IAcademicSemesterMonths[]],
      {
        required_error: "Start month in required!",
      }
    ),
    endMonth: z.enum(
      [...AcademicSemesterMonths] as [string, ...IAcademicSemesterMonths[]],
      {
        required_error: "End month in required!",
      }
    ),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
