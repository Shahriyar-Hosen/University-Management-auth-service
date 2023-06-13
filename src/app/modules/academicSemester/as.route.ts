import express from "express";
import { validateRequest } from "../../middlewares";
import { AcademicSemesterController } from "./as.controller";
import { AcademicSemesterValidation } from "./as.validation";

const router = express.Router();

router.post(
  "/create-semester",
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get("/", AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
