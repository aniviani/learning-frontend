interface IProps {
  id: string;
  name: string;
  age: number;
  onDelete: (params: { id: string }) => void;
}

export const Person = ({ id, name, age, onDelete }: IProps) => {
  const handleDelete = () => {
    onDelete({ id });
  };

  return (
    <div>
      <div>
        {name} {age}
      </div>
      <button onClick={handleDelete}>удалить</button>
    </div>
  );
};
