import { productsApi } from '../api/productsApi.ts';
import { useProductContext } from './productsContext.tsx';

interface IResult {
  createProduct: (params: {
    name: string;
    description: string;
    price: number;
    category: string;
  }) => Promise<void>;
}

export const useCreateProductMutation = (): IResult => {
  const { setProducts } = useProductContext();
  const createProduct: IResult['createProduct'] = async ({
    name,
    description,
    price,
    category,
  }) => {
    try {
      const createdProduct = await productsApi.create({
        id: crypto.randomUUID(),
        name,
        description,
        price,
        category,
      });

      setProducts((previousProducts) => {
        if (previousProducts === null) {
          throw new Error('нельзя выполнить задачу');
        }
        return [...previousProducts, createdProduct];
      });
    } catch (error) {
      console.error(error);
    }
  };
  return { createProduct };
};
