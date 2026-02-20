
interface IProps {
    name: string;
    age: number;
    onDelete: (a: {name: string; age: number}) => void;
    onChange: (params: {name: string; age: number}) => void;
}

export const UserCard = ({ name, age, onDelete, onChange }: IProps) => {

const handleDeleteClick = () => {
    console.log('кнопка удалить нажата', `имя пользователя: ${name}`)
    onDelete({name, age})
}

const handleChangeClick = () => {
    console.log('кнопка редактировать нажата', `имя пользователя: ${name}`)
    onChange({name, age})
}

    return (
        <div>
            <div>имя: { name }</div>
            <div>возраст: { age }</div>
            <button onClick={ handleDeleteClick }>удалить</button>
            <button onClick={ handleChangeClick }>редактировать</button>
        </div>
    )
}