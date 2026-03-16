import { useState, type ChangeEventHandler } from 'react';

interface IForm {
  firstname: string;
  name: string;
  lastname: string;
  birthday: string;
}

interface IProps {
  onSubmit: (params: IForm) => void;
}

export const CreatePersonForm = ({ onSubmit }: IProps) => {
  const [form, setForm] = useState<IForm>({
    firstname: '',
    name: '',
    lastname: '',
    birthday: '',
  });

  const handleFirstnameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newFirstname = event.target.value;
    setForm({
      firstname: newFirstname,
      name: form.name,
      lastname: form.lastname,
      birthday: form.birthday,
    });
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newName = event.target.value;
    setForm({
      firstname: form.firstname,
      name: newName,
      lastname: form.lastname,
      birthday: form.birthday,
    });
  };

  const handleLastnameChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newLastname = event.target.value;
    setForm({
      firstname: form.firstname,
      name: form.name,
      lastname: newLastname,
      birthday: form.birthday,
    });
  };

  const handleBirthdayChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newBirthday = event.target.value;
    setForm({
      firstname: form.firstname,
      name: form.name,
      lastname: form.lastname,
      birthday: newBirthday,
    });
  };

  const handleSubmit = () => {
    onSubmit({
      firstname: form.firstname,
      name: form.name,
      lastname: form.lastname,
      birthday: form.birthday,
    });

    setForm({
      firstname: '',
      name: '',
      lastname: '',
      birthday: '',
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="введите фамилию"
        value={form.firstname}
        onChange={handleFirstnameChange}
      />
      <input
        type="text"
        placeholder="введите имя"
        value={form.name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="введите отчество"
        value={form.lastname}
        onChange={handleLastnameChange}
      />
      <input
        type="text"
        placeholder="введите дату рождения"
        value={form.birthday}
        onChange={handleBirthdayChange}
      />
      <button onClick={handleSubmit}>добавить</button>
    </div>
  );
};
