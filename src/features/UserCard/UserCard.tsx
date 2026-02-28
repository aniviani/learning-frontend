interface IProps {
  id: string;
  name: string;
  age: number;
  onDelete: (a: { id: string; name: string; age: number }) => void;
  onChange: (params: { id: string; name: string; age: number }) => void;
}

export const UserCard = ({ id, name, age, onDelete, onChange }: IProps) => {
  const handleDeleteClick = () => {
    console.log('кнопка удалить нажата', `имя пользователя: ${name}`);
    onDelete({ id, name, age });
  };

  const handleChangeClick = () => {
    console.log('кнопка редактировать нажата', `имя пользователя: ${name}`);
    onChange({ id, name, age });
  };

  return (
    <div>
      <div>имя: {name}</div>
      <div>возраст: {age}</div>
      <button onClick={handleDeleteClick}>удалить</button>
      <button onClick={handleChangeClick}>редактировать</button>
    </div>
  );
};
