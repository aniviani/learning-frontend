import { ProductCard } from '../ProductCard/ProductCard';

export const ProductCardList = () => {
  const products = [
    {
      id: crypto.randomUUID(),
      price: 9890,
      name: 'Матрас',
      rating: 4.8,
    },
    {
      id: crypto.randomUUID(),
      price: 2000,
      name: 'Подушка',
      rating: 4.7,
    },
    {
      id: crypto.randomUUID(),
      price: 7900,
      name: 'Одеяло',
      rating: 4.9,
    },
    {
      id: crypto.randomUUID(),
      price: 1700,
      name: 'Плед',
      rating: 4.6,
    },
  ];

  const handleAddToCart = (params: {
    id: string;
    price: number;
    name: string;
    rating: number;
  }) => {
    console.log(
      `товар: ${params.id} ${params.name} ${params.price} ${params.rating} добавлен в корзину`,
    );
  };

  const handleAddToFavorite = (params: {
    id: string;
    price: number;
    name: string;
    rating: number;
  }) => {
    console.log(
      `товар: ${params.id} ${params.name} ${params.price} ${params.rating} добавлен в избранное`,
    );
  };

  return (
    <>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            price={product.price}
            name={product.name}
            rating={product.rating}
            onAddToCart={handleAddToCart}
            onAddToFavorite={handleAddToFavorite}
          />
        ))}
      </div>
    </>
  );
};
