import { Response, Request } from 'express';
import * as userServices from '../services/user';

export const userInfo = async (req: Request, res: Response) => {
  try {
    const { idx }: { idx?: string | undefined } = req.params;

    if (!idx) throw Error('Param Error');

    const [result]: Array<Object> = await userServices.userInfo(+idx);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ status: 400, error: error.toString() });
  }
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

export const userModify = async (req: Request, res: Response) => {
  try {
    const { body }: Request = req;
    const result: number = await userServices.userModify(body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ status: 400, error: error.toString() });
  }
};

export const userDelete = async (req: Request, res: Response) => {
  try {
    const { idx }: { idx?: string | undefined } = req.params;

    if (!idx) throw Error('Param Error');

    const result: number = await userServices.userDelete(+idx);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ status: 400, error: error.toString() });
  }
};
