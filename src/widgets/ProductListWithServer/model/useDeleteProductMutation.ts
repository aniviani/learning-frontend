import { productsApi } from '../api/productsApi.ts';
import { useProductContext } from './productsContext.tsx';
import { useState } from 'react';

interface IResult {
  deleteProduct: (params: { id: string }) => void;
  isLoading: boolean;
  error: Error | null;
}
export const useDeleteProductMutation = (): IResult => {
  const { setProducts } = useProductContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const deleteProduct: IResult['deleteProduct'] = async ({ id }) => {
    try {
      setIsLoading(true);
      await productsApi.delete(id);
      setProducts((previousProducts) => {
        if (previousProducts === null) {
          throw new Error(
            `невозможно удалить товар, тк previousProducts = null`,
          );
        }
        return previousProducts.filter((product) => product.id !== id);
      });
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, deleteProduct, error };
};
