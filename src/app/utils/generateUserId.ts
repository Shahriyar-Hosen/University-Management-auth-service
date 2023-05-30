import User from "../modules/users/users.model";

const fineLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser?.id;
};

const generateUserId = async () => {
  const currentId = (await fineLastUserId()) || (0).toString().padStart(5, "0");

  // increment by 1
  const newId = (Number(currentId) + 1).toString().padStart(5, "0");

  return newId;
};

export default generateUserId;
