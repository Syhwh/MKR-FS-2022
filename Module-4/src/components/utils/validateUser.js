import { user as User } from './users';

export const validateUser = (user) => {
  if (user.email === '' || user.password === '') {
    return false;
  }
  if (user.email === User.email || user.password === User.password) {
    return true;
  }
  return false;
};
