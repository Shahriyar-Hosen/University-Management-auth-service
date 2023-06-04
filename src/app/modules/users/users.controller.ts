import { Request, Response } from "express";
import usersService from "./users.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const result = await usersService.createUser(user);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Failed to create user",
      error: err,
    });
  }
};
