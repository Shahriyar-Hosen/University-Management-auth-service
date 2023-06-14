import cors from "cors";
import express, { Application } from "express";
import { globalErrorHandler } from "./app/middlewares";

import routes from "./app/routes";

const app: Application = express();

// using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use("/api/v1/", routes);
// app.use("/api/v1/academic-semester/", AcademicSemesterRoutes);

//Testing
// app.get("/", async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error("Testing Error logger");
// });

//global error handler
app.use(globalErrorHandler);

// handler not found
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "Not Found",
//     errorMessage: [
//       {
//         path: req.originalUrl,
//         message: "API Not Found",
//       },
//     ],
//   });

//   next();
// });

export default app;
