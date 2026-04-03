import type { FC } from 'react';

interface IProps {
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

  onDelete: () => void;
}

export const Product: FC<IProps> = ({
  name,
  description,
  price,
  category,
  createdAt,
  onDelete,
}) => {
  return (
    <div>
      <div>назание: {name}</div>
      <div>описание: {description}</div>
      <div>стоимость: {price}</div>
      <div>категория: {category}</div>
      <div>дата создания: {createdAt}</div>
      <button onClick={() => onDelete()}>удалить товар</button>
    </div>
  );
};
