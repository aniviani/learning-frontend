import { useState } from 'react';
import { type ChangeEventHandler } from 'react';
import { type IUser } from './users';
import { users as allUsers } from './users';
import { getSearchedUsersBySurname } from './getSearchedUsersBySurname';

interface IResult {
  searchValue: string;
  changeSearchValue: ChangeEventHandler<HTMLInputElement>;
  searchedUsers: IUser[];
  deleteUser: (id: number) => void;
}

export const useUsersManager = (): IResult => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>(allUsers);

  const deleteUser: IResult['deleteUser'] = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const changeSearchValue: IResult['changeSearchValue'] = (event) => {
    const value = event.target.value;

    setSearchValue(value);
  };

  const searchedUsers = getSearchedUsersBySurname(searchValue, users);

  return { searchValue, changeSearchValue, searchedUsers, deleteUser };
};
