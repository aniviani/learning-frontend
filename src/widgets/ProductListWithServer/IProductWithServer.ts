export interface IProductWithServer {
  /**
   * уникальный идентификатор товара
   */
  id: string;
  /**
   * название товара
   */
  name: string;
  /**
   * описание товара
   */
  description: string;
  /**
   * стоимость товара
   */
  price: number;
  /**
   * категория товара
   */
  category: string;
  /**
   * дата создания
   */
  createdAt: string;
}
