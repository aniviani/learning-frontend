import { useProductsQuery } from './model/useProductsQuery.ts';
import { Product } from './ui/Product.tsx';
import { CreateProductForm } from './ui/CreateProductForm.tsx';

export const ProductListWithServer = () => {
  const { isLoading, products, error } = useProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>что-то пошло не так...</div>;
  }

  return (
    <div>
      <div>Product list with server</div>
      <CreateProductForm />
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          category={product.category}
          createdAt={product.createdAt}
        />
      ))}
    </div>
  );
};
