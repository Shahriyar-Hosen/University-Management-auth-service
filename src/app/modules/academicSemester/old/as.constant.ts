import {
  IAcademicSemesterCode,
  IAcademicSemesterMonths,
  IAcademicSemesterTitles,
} from "./as.interface";

export const AcademicSemesterMonths: IAcademicSemesterMonths[] = [
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
];

export const AcademicSemesterTitles: IAcademicSemesterTitles[] = [
  "Autumn",
  "Summer",
  "Fall",
];

export const AcademicSemesterCode: IAcademicSemesterCode[] = ["01", "02", "03"];

export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

export const academicSemesterSearchableFields = ["title", "code", "year"];
export const academicSemesterFilterableFields = [
  "searchTerm",
  "title",
  "code",
  "year",
];