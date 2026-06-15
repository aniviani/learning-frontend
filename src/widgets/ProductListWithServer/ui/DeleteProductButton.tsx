import { useDeleteProductMutation } from '../model/useDeleteProductMutation.ts';
import type { FC } from 'react';

interface IProps {
  id: string;
}

export const DeleteProductButton: FC<IProps> = ({ id }) => {
  const { isLoading, deleteProduct } = useDeleteProductMutation();

  const a = 11;
  return (
    <button
      disabled={isLoading}
      onClick={() => deleteProduct({ id })}
    >
      удалить
    </button>
  );
};
