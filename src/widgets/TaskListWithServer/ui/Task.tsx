import type { FC } from 'react';

interface IProps {
  /**
   * Заголовок задачи
   */
  title: string;
  /**
   * Описание задачи
   */
  description: string;
  /**
   * Статус выполнения
   */
  completed: boolean;
  /**
   * Дата создания
   */
  createdAt: string;
}

export const Task: FC<IProps> = ({
  title,
  description,
  completed,
  createdAt,
}) => {
  return (
    <div>
      <div>назание: {title}</div>
      <div>описание: {description}</div>
      <div>статус: {completed}</div>
      <div>дата создания: {createdAt}</div>
    </div>
  );
};
