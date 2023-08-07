/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";
import { IAdmin } from "../admin/admin.interface";
import { IFaculty } from "../faculty/faculty.interface";
import { IStudent } from "../student/student.interface";

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: true | false;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
