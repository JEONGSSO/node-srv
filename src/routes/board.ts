import { userInfo } from '../controller/user';

export const Routes = [
  { method: 'get', endpoint: '/board', controller: userInfo },
  { method: 'post', endpoint: '/board', controller: userInfo },
];
