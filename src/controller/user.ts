import { Response } from 'express'
import * as userServices from '../services/user'

export const userInfo = async (req: Request, res: Response) => {
  const [ result ]: Array<Object> = await userServices.userInfo()
  return res.json(result)
}