import express from "express";
import { validateRequest } from "../../middlewares";
import { AcademicSemesterValidation } from "./as.validation";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  // UserController.createUser
);

export const UserRoutes = router;
