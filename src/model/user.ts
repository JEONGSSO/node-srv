import * as db from '../../src/config/db';
import { joinType } from '../../types/user';

export const userInfo = async (idx: string) => {
  return await db.query(`SELECT * FROM user WHERE idx = ${idx}`);
};

export const userJoin = async (userForm: joinType) => {
  const { email, password, nickname } = userForm;
  const tt = await db.query(
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
