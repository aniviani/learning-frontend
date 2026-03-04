import { useState } from 'react';
import { NumberCard } from './ui/NumberCard.tsx';
import { useAddNumber } from '../../features/NumberCardList/add-number/model/useAddNumber.ts';
import { AddNumberForm } from '../../features/NumberCardList/add-number/ui/AddNumberForm.tsx';
import { useDeleteNumber } from '../../features/NumberCardList/delete-number/model/useDeleteNumber.ts';

export const NumberCardList = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const { deleteNumber } = useDeleteNumber({ numbers, setNumbers });
  const { addNumber } = useAddNumber({ numbers, setNumbers });

  return (
    <>
      <AddNumberForm onSubmit={addNumber} />

      <div>
        {numbers.map((number) => (
          <NumberCard
            key={number}
            number={number}
            onDelete={deleteNumber}
          />
        ))}
      </div>
    </>
  );
};
