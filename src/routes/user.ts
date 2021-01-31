import { userInfo, userJoin } from '../controller/user';

export const Routes = [
  { method: 'get', endpoint: '/user/:idx', controller: userInfo },
  { method: 'post', endpoint: '/user', controller: userJoin },
];
