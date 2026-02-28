import { useState } from 'react';
import styles from './NumberList.module.css';
import { sortNumbers } from './sortNumbers';
import { numbers } from './numbers';

export const NumberList = () => {
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');

  const sortedNumbers = sortNumbers({ sort, numbers: [...numbers] });

  return (
    <div className={styles.container}>
      {sortedNumbers.map((number) => (
        <div
          key={number}
          className={styles.number}
        >
          {number}
        </div>
      ))}

      <select
        value={sort}
        onChange={(event) => setSort(event.target.value as 'asc' | 'desc')}
        name="select"
      >
        <option value="asc">по возрастанию</option>
        <option value="desc">по убыванию</option>
      </select>
    </div>
  );
};
