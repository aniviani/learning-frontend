import { type ChangeEventHandler, useState } from 'react';

interface IProps {
  onSubmit: (params: { addedCity: string }) => void;
}

export const AddCityForm = ({ onSubmit }: IProps) => {
  const [addedCity, setAddedCity] = useState<string>('');
  const handleCityAdd: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newCityAdd = event.target.value;
    setAddedCity(newCityAdd);
  };

  const submit = () => {
    if (!addedCity) {
      return;
    }

    onSubmit({ addedCity });
    setAddedCity('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="введите город"
        value={addedCity}
        onChange={handleCityAdd}
      />

      <button onClick={submit}>добавить</button>
    </>
  );
};
