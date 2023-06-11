import express, { Router } from "express";
import { AcademicSemesterRoutes } from "../modules/academicSemester/as.route";
import { UserRoutes } from "../modules/user/user.route";

const routes = express.Router();

type IRoutes = { path: string; route: Router };

const moduleRoutes: IRoutes[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => routes.use(path, route));

export default routes;
