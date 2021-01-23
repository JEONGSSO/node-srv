import { userInfo } from "../controller/user";

export const Routes = [
  { method: 'get', endpoint: '/list', controller: userInfo},
  { method: 'post', endpoint: '/list', controller: userInfo},
]