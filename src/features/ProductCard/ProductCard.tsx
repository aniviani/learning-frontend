import styles from './ProductCard.module.css';
import type { FC } from 'react';

interface IProps {
  id: string;
  price: number;
  name: string;
  rating: number;
  onAddToCart: (params: {
    id: string;
    price: number;
    name: string;
    rating: number;
  }) => void;
  onAddToFavorite: (params: {
    id: string;
    price: number;
    name: string;
    rating: number;
  }) => void;
}

export const ProductCard: FC<IProps> = ({
  id,
  price,
  name,
  rating,
  onAddToCart,
  onAddToFavorite,
}) => {
  const handleAddToCart = () => {
    onAddToCart({ id, price, name, rating });
  };

  const handleAddToFavorite = () => {
    onAddToFavorite({ id, price, name, rating });
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={styles.description}>
        <span>{price} ₽</span>
        <span>{name}</span>
        <span>{rating}</span>
      </div>
      <button
        className={styles.cartButton}
        onClick={handleAddToCart}
      >
        В корзину
      </button>
      <button
        className={styles.favoriteButton}
        onClick={handleAddToFavorite}
      >
        +
      </button>
    </div>
  );
};
