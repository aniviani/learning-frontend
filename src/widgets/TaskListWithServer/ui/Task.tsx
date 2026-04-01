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

  onDelete: () => void;

  onComplete: () => void;
}

export const Task: FC<IProps> = ({
  title,
  description,
  completed,
  createdAt,
  onDelete,
  onComplete,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onComplete()}
      />
      <div>назание: {title}</div>
      <div>описание: {description}</div>
      <div>дата создания: {createdAt}</div>
      <button onClick={() => onDelete()}>удалить</button>
    </div>
  );
};
