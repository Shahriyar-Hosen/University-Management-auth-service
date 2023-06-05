import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import usersRouter from "./app/modules/users/users.route";

const app: Application = express();

// using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use("/api/v1/users/", usersRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send("Application running Successfully!!! ✅✅✅");
});

// Testing
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, "Ore baba Error");
//   // next("Ore baba Error");
// });

// global error handler
app.use(globalErrorHandler);

export default app;
