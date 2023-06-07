import cors from "cors";
import express, { Application } from "express";
import { globalErrorHandler } from "./app/middlewares";
import { UserRoutes } from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use("/api/v1/users/", UserRoutes);

//Testing
// app.get("/", async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error("Testing Error logger");
// });

//global error handler
app.use(globalErrorHandler);

export default app;
