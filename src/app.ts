import cors from "cors";
import express, { Application } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { UserRoutes } from "./app/modules/users/user.route";

const app: Application = express();

// using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use("/api/v1/users/", UserRoutes);

// Testing
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, "Ore baba Error");
//   // next("Ore baba Error");
// });

// global error handler
app.use(globalErrorHandler);

export default app;
