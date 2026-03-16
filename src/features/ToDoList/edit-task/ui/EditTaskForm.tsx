import { useState, type FC } from 'react';

interface IProps {
  name: string;
  description: string;
  onSave: (name: string, description: string) => void;
}

export const EditTaskForm: FC<IProps> = ({
  name: initialName,
  description: initialDescription,
  onSave,
}) => {
  const [name, setName] = useState<string>(initialName);
  const [description, setDescription] = useState<string>(initialDescription);

  return (
    <div className="edit-task-form">
      <div>Редактировать задачу</div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onSave(name, description)}>сохранить</button>
      </div>
    </div>
  );
};
