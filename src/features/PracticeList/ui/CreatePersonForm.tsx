import { useState, type ChangeEventHandler } from 'react';

interface IForm {
  name: string;
  age: number;
}

interface IProps {
  onSubmit: (params: IForm) => void;
}

export const CreatePersonForm = ({ onSubmit }: IProps) => {
  const [form, setForm] = useState<IForm>({
    name: '',
    age: 0,
  });

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newName = event.target.value;
    setForm({
      name: newName,
      age: form.age,
    });
  };

  const handleAgeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newAge = event.target.valueAsNumber;
    setForm({
      name: form.name,
      age: newAge,
    });
  };

  const handleSubmit = () => {
    onSubmit({
      name: form.name,
      age: form.age,
    });

    setForm({
      name: '',
      age: 0,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="введите имя"
        value={form.name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="введите возраст"
        value={form.age}
        onChange={handleAgeChange}
      />
      <button onClick={handleSubmit}>добавить</button>
    </div>
  );
};
