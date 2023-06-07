import { z } from "zod";

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(["Autumn", "Summer", "Fall"], {
      required_error: "Title in required!",
    }),
    code: z.enum(["01", "02", "03"], {
      required_error: "Code in required!",
    }),
    year: z.number({
      required_error: "Year in required!",
    }),
    startMonth: z.enum(
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      {
        required_error: "Start month in required!",
      }
    ),
    endMonth: z.enum(
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      {
        required_error: "End month in required!",
      }
    ),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
