import { Model } from "mongoose";

export type IASMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type IASTitles = "Autumn" | "Summer" | "Fall";
export type IASCode = "01" | "02" | "03";

export type IAcademicSemester = {
  title: IASTitles;
  year: number;
  code: IASCode;
  startMonth: IASMonths;
  endMonth: IASMonths;
};

export type AcademicSemesterModel = Model<IAcademicSemester>; // Record<string, unknown>
