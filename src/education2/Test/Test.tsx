import { useState, type ChangeEventHandler } from 'react';

export const Test = () => {
  const [value, setValue] = useState<string>('');

  const handleSearchTest: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  console.log('nastya');

  // const toUpperCaseTest = () => {
  //     const newValue = value.toUpperCase()
  //     return newValue
  // }

  // const upperCaseValue = toUpperCaseTest()

  return (
    <div>
      <input
        type="text"
        placeholder="введите значение"
        value={value}
        onChange={handleSearchTest}
      />
      <span>вы ввели {value.toUpperCase()}</span>
    </div>
  );
};
