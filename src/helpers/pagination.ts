import { IOptionResult, IPaginationOption } from "../interfaces";

export const calculatePagination = (
  option: IPaginationOption
): IOptionResult => {
  const page = Number(option.page || 1);
  const limit = Number(option.limit || 10);
  const skip = (page - 1) * limit;
  const sortBy = option.sortBy || "createdAt";
  const sortOrder = option.sortOrder || "desc";

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
