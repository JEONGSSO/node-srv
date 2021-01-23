import * as userModel from "../model/user";

export const userInfo = async () => {
  const data = await userModel.userInfo();
  return data;
}