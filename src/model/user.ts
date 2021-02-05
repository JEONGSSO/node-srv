import * as db from '../../src/config/db';
import { joinType, modifyType } from '../../types/user';

export const userInfo = async (idx: number) => {
  return await db.query(`SELECT * FROM user WHERE idx = ${idx}`);
};

export const userJoin = async (userForm: joinType) => {
  const { email, password, nickname } = userForm;
  await db.query(
    `INSERT INTO user
    (
      email,
      password,
      nickname
    ) 
      VALUES 
      (
      '${email}',
      '${password}',
      '${nickname}'
      )`
  );
  return 200;
};

export const userModify = async (userForm: modifyType) => {
  await db.query(
    `UPDATE user
    SET ${userForm.type} = '${userForm.value}'
    WHERE idx = ${userForm.idx}`
  );
  return 200;
};

export const userDelete = async (idx: number) => {
  await db.query(`DELETE FROM user WHERE idx = ${idx}`);
  return 200;
};
