import { users as allUsers } from "./users";
import { User } from "../User/User";
import { useState } from "react";
import { type ChangeEventHandler} from "react";
import { type IUser } from "./users"

export const UsersList = () => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [users, setUsers] = useState<IUser[]>(allUsers)

    const deleteUser = (id: number): void => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = (event.target.value)

        setSearchValue(value)
     }

     const getUsers = (searchValue: string, users: IUser[]): IUser[] => {

        if( searchValue === '') {
            return users;
        }
            return users.filter((user) => user.surname.includes(searchValue))
     }

    const searchedUsers = getUsers(searchValue, users)

    return (
    <div>
        <div>Список пользователей</div>
        <input type="text" placeholder="найти..." value={searchValue} onChange={changeSearchValue}/>
        <button>Удалить пользователя</button>
       
        <div>
            {searchedUsers.map((user) => (
                <User
                key={user.id}
                name={user.name}
                surname={user.surname}
                age={user.age}
                email={user.email}
                city={user.city}
                country={user.country}
                />
                ))}
        </div>

    </div>
    );
};
