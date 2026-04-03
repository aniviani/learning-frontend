import { productsApi } from '../api/productsApi.ts';
import { useProductContext } from './productsContext.tsx';

interface IResult {
  deleteProduct: (params: { id: string }) => void;
}
export const useDeleteProductMutation = (): IResult => {
  const { setProducts } = useProductContext();
  const deleteProduct: IResult['deleteProduct'] = ({ id }) => {
    setProducts((previousProducts) => {
      if (previousProducts === null) {
        throw new Error(`невозможно удалить товар, тк previousProducts = null`);
      }
      return previousProducts.filter((product) => product.id !== id);
    });

    void productsApi.delete(id);
  };

  return { deleteProduct };
};
