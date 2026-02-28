import { type IUser } from './users';

export const getSearchedUsersBySurname = (
  searchValue: string,
  users: IUser[],
): IUser[] => {
  if (searchValue === '') {
    return users;
  }
  return users.filter((user) => user.surname.includes(searchValue));
};
