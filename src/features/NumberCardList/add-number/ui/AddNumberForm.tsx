import { type ChangeEventHandler, useState } from 'react';

interface IProps {
  onSubmit: (params: { addedNumber: number }) => void;
}

export const AddNumberForm = ({ onSubmit }: IProps) => {
  const [addedNumber, setAddedNumber] = useState<number>(0);

  const handleAddedNumberChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newAddedNumberValue = event.target.valueAsNumber;

    if (Number.isNaN(newAddedNumberValue)) {
      setAddedNumber(0);

      return;
    }

    setAddedNumber(newAddedNumberValue);
  };

  const submit = () => {
    if (!addedNumber) {
      return;
    }

    onSubmit({ addedNumber });
    setAddedNumber(0);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="введите число"
        value={addedNumber}
        onChange={handleAddedNumberChange}
      />
      <button onClick={submit}>добавить</button>
    </div>
  );
};
