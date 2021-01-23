import { userInfo } from "../controller/user";

export const Routes = [
  { method: 'get', endpoint: '/user', controller: userInfo},
  { method: 'post', endpoint: '/user', controller: userInfo},
]