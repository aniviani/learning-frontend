export interface ITaskWithServer {
  /**
   * Уникальный идентификатор задачи
   */
  id: string;
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
