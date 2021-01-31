import { Response, Request } from 'express';
import * as userServices from '../services/user';

export const userInfo = async (req: Request, res: Response) => {
  const {
    params: { idx },
  }: Request = req;
  const [result]: Array<Object> = await userServices.userInfo(idx);
  return res.json(result);
};

export const userJoin = async (req: Request, res: Response) => {
  try {
    const { body }: Request = req;
    const result: number = await userServices.userJoin(body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ status: 400, error: error.toString() });
  }
};
