import { ProductListWithServer } from './widgets/ProductListWithServer/ProductListWithServer.tsx';
import { ProductsContextProvider } from './widgets/ProductListWithServer/model/productsContext.tsx';

export const App = () => {
  return (
    <>
      <ProductsContextProvider>
        <ProductListWithServer />
      </ProductsContextProvider>
    </>
  );
};
