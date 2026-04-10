import type { FC } from 'react';
import { DeleteProductButton } from './DeleteProductButton.tsx';

interface IProps {
  id: string;
  /**
   * название продукта
   */
  name: string;
  /**
   * Описание продукта
   */
  description: string;
  /**
   * Стоимость продукта
   */
  price: number;
  /**
   * Категория продукта
   */
  category: string;
  /**
   * Дата создания
   */
  createdAt: string;
}

export const Product: FC<IProps> = ({
  id,
  name,
  description,
  price,
  category,
  createdAt,
}) => {
  return (
    <div>
      <div>назание: {name}</div>
      <div>описание: {description}</div>
      <div>стоимость: {price}</div>
      <div>категория: {category}</div>
      <div>дата создания: {createdAt}</div>
      <DeleteProductButton id={id} />
    </div>
  );
};
