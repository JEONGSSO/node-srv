import * as db from '../../src/config/db'

export const userInfo = async () => {
  return await db.query(`SELECT * from user`);
}
