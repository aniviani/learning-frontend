import { User } from "../User/User";
import {useUsersManager} from './useUsersManager'

export const UsersList = () => {
const {searchValue, changeSearchValue, searchedUsers, deleteUser} = useUsersManager()

    return (
    <div>
        <div>Список пользователей</div>
        <input type="text" placeholder="найти..." value={searchValue} onChange={changeSearchValue}/>
       
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
                onDelete={() => deleteUser(user.id)}
                />
                ))}
        </div>

    </div>
    );
};
