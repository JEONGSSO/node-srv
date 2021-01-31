import * as userModel from '../model/user';
import { joinType } from '../../types/user';

export const userInfo = async (idx: string) => {
  return await userModel.userInfo(idx);
};

export const userJoin = async (userForm: joinType) => {
  return await userModel.userJoin(userForm);
};
