import cors from "cors";
import express, { Application, Request, Response } from "express";
import usersService from "./app/modules/users/users.service";

const app: Application = express();

// using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  await usersService.createUser({
    id: "123",
    password: "habijabi",
    role: "student",
  });

  res.send("Application running Successfully!!! ✅✅✅");
});

export default app;
