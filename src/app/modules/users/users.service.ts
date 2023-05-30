import { IUser } from "./users.interface";
import User from "./users.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  // default password

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new Error("Failed to create user");
  }

  return createdUser;
};

export default {
  createUser,
};
