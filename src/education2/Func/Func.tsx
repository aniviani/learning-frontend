import { useState } from 'react';

export const Func = () => {
  const [value, setValue] = useState<number>(() => {
    console.log('init');
    return 0;
  });

  const counter = () => {
    setValue(value + 1);
  };

  return (
    <>
      <button onClick={counter}>click</button>
      <text>вы нажали {value} раз</text>
    </>
  );
};
