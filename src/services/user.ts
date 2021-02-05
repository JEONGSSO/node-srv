import * as userModel from '../model/user';
import { joinType, modifyType } from '../../types/user';

export const userInfo = async (idx: number) => {
  return await userModel.userInfo(idx);
};

export const userJoin = async (userForm: joinType) => {
  return await userModel.userJoin(userForm);
};

export const userModify = async (userForm: modifyType) => {
  return await userModel.userModify(userForm);
};

export const userDelete = async (idx: number) => {
  return await userModel.userDelete(idx);
};
