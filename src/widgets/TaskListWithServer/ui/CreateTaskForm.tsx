import { type ChangeEventHandler, type FC, useState } from 'react';

interface IForm {
  title: string;
  description: string;
}

interface IProps {
  onSubmit: (payload: IForm) => void;
}

export const CreateTaskForm: FC<IProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<IForm>({
    title: '',
    description: '',
  });

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newTitle = event.target.value;
    setForm({
      title: newTitle,
      description: form.description,
    });
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newDescription = event.target.value;
    setForm({
      title: form.title,
      description: newDescription,
    });
  };

  const submit = () => {
    onSubmit({
      title: form.title,
      description: form.description,
    });
    setForm({
      title: '',
      description: '',
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="введите название"
        value={form.title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="введите описание"
        value={form.description}
        onChange={handleDescriptionChange}
      />
      <button
        onClick={submit}
        disabled={!form.title || !form.description}
      >
        добавить задачу
      </button>
    </div>
  );
};
