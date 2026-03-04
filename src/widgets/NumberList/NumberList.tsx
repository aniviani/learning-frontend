import { useState } from 'react';
import styles from './NumberList.module.css';
import { numbers as initialNumbers } from '../../features/NumberList/numbers.ts';
import { NumberCard } from './ui/NumberCard.tsx';
import { useDeleteNumber } from '../../features/NumberList/delete-numbers/model/useDeleteNumber.ts';
import { SortSelect } from '../../features/NumberList/sort-numbers/ui/SortSelect.tsx';
import { useSortNumbers } from '../../features/NumberList/sort-numbers/model/useSortNubers.ts';

export const NumberList = () => {
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const { sort, sortedNumbers, setSort } = useSortNumbers({ numbers });
  const { deleteNumber } = useDeleteNumber({ numbers, setNumbers });

  return (
    <div className={styles.container}>
      {sortedNumbers.map((number) => (
        <NumberCard
          key={number}
          number={number}
          onDelete={deleteNumber}
        />
      ))}

      <SortSelect
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
};
