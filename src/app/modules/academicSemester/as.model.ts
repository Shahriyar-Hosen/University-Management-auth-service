import { Schema, model } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterMonths,
  AcademicSemesterTitles,
} from "./as.constant";
import { AcademicSemesterModel, IAcademicSemester } from "./as.interface";

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: AcademicSemesterTitles,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterMonths,
    },

    endMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  "AcademicSemester",
  academicSemesterSchema
);

export default AcademicSemester;
