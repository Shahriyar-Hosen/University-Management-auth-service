import express from "express";
import { createUser } from "./users.controller";

const usersRouter = express.Router();

usersRouter.post("/create-user", createUser);

export default usersRouter;
