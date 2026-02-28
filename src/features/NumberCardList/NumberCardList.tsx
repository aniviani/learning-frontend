import { useState, type ChangeEventHandler } from 'react';
import { NumberCard } from '../NumberCard/NumberCard';

export const NumberCardList = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [addedNumber, setAddedNumber] = useState<number>(0);

  const handleNumberDelete = (params: { number: number }) => {
    console.log(`нажата кнопка удалить ${params.number}`);

    const numbersAfterDelete = numbers.filter(
      (number) => number !== params.number,
    );
    setNumbers(numbersAfterDelete);
  };

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

  const handleNumberAdd = () => {
    if (addedNumber === undefined) {
      return;
    }

    if (numbers.includes(addedNumber)) {
      setAddedNumber(0);
      return;
    }

    const newNumbers = [...numbers, addedNumber];
    setNumbers(newNumbers);
    setAddedNumber(0);
  };

  console.log(addedNumber);

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="введите число"
          value={addedNumber}
          onChange={handleAddedNumberChange}
        />
        <button onClick={handleNumberAdd}>добавить</button>
      </div>

      <div>
        {numbers.map((number) => (
          <NumberCard
            key={number}
            number={number}
            onDelete={handleNumberDelete}
          />
        ))}
      </div>
    </>
  );
};
