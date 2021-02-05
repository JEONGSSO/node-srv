import { userInfo, userJoin, userModify, userDelete } from '../controller/user';

export const Routes = [
  { method: 'get', endpoint: '/user/:idx', controller: userInfo },
  { method: 'post', endpoint: '/user', controller: userJoin },
  { method: 'put', endpoint: '/user', controller: userModify },
  { method: 'delete', endpoint: '/user/:idx', controller: userDelete },
];
