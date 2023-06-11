import express from "express";
import { validateRequest } from "../../middlewares";
import { ASController } from "./as.controller";
import { AcademicSemesterValidation } from "./as.validation";

const router = express.Router();

router.post(
  "/create-semester",
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  ASController.createSemester
);

export const ASRoutes = router;
