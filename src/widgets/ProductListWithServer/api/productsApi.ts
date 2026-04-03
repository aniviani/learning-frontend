import type { IProductWithServer } from '../IProductWithServer.ts';
import type { ICreateProductDTO } from './dto/ICreateProductDTO.ts';

const BASE_URL = 'http://localhost:3000/products';

export const productsApi = {
  /**
   * получить все продукты
   */
  getAll: async (): Promise<IProductWithServer[]> => {
    const response = await fetch(BASE_URL, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data as IProductWithServer[];
  },

  /**
   * создать новый продукт
   */
  create: async (dto: ICreateProductDTO): Promise<IProductWithServer> => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(dto),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data as IProductWithServer;
  },
  /**
   * удалить продукт
   */
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  },
};
