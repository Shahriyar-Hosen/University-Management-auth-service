import { z } from "zod";
import { ASCode, ASMonths, ASTitles } from "./as.constant";
import { IASCode, IASMonths, IASTitles } from "./as.interface";

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...ASTitles] as [string, ...IASTitles[]], {
      required_error: "Title in required!",
    }),
    code: z.enum([...ASCode] as [string, ...IASCode[]], {
      required_error: "Code in required!",
    }),
    year: z.number({
      required_error: "Year in required!",
    }),
    startMonth: z.enum([...ASMonths] as [string, ...IASMonths[]], {
      required_error: "Start month in required!",
    }),
    endMonth: z.enum([...ASMonths] as [string, ...IASMonths[]], {
      required_error: "End month in required!",
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
