import httpStatus from "http-status";
import { Schema, model } from "mongoose";
import { ApiError } from "../../../errors";
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
      type: String,
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

academicSemesterSchema.pre("save", async function (next) {
  const inExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (inExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Academic semester is already exist!"
    );
  } else {
    next();
  }
});

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  "AcademicSemester",
  academicSemesterSchema
);

export default AcademicSemester;
