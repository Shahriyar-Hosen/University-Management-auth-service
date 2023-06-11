import { Schema, model } from "mongoose";
import { ASCode, ASMonths, ASTitles } from "./as.constant";
import { AcademicSemesterModel, IAcademicSemester } from "./as.interface";

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      enum: ASTitles,
    },
    code: {
      type: String,
      required: true,
      enum: ASCode,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: ASMonths,
    },

    endMonth: {
      type: String,
      required: true,
      enum: ASMonths,
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
