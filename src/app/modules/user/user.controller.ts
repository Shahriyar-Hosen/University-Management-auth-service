import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;

    const result = await UserService.createUser(user);

    next();
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
