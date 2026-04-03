import {
  createContext,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react';
import type { IProductWithServer } from '../IProductWithServer.ts';

interface IProductContextValue {
  products: IProductWithServer[] | null;
  setProducts: Dispatch<SetStateAction<IProductWithServer[] | null>>;
}

interface IProductContextProviderProps {
  children: ReactNode;
}

const productContext = createContext<IProductContextValue | null>(null);

export const useProductContext = (): IProductContextValue => {
  const valueFromContext = useContext(productContext);
  if (!valueFromContext) {
    throw new Error('useProductContext вызван вне ProductsContextProvider');
  }
  return valueFromContext;
};

export const ProductsContextProvider: FC<IProductContextProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProductWithServer[] | null>(null);

  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};
