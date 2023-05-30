import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface";

type UserModel = Model<IUser>;

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser, UserModel>("User", userSchema);

export default User;
