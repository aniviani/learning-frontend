import type { ITaskWithServer } from '../ITaskWithServer.ts';
import type { ICreateTaskDTO } from './dto/ICreateTaskDTO.ts';
import type { IChangeTaskDTO } from './dto/IChangeTaskDTO.ts';

const BASE_URL = 'http://localhost:3000/tasks';

export const tasksApi = {
  /**
   * создать новую задачу
   */
  create: async (dto: ICreateTaskDTO): Promise<ITaskWithServer> => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(dto),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data as ITaskWithServer;
  },
  /**
   * удалить задачу
   */
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  },
  /**
   *получить все задачи
   */
  getAll: async (): Promise<ITaskWithServer[]> => {
    const response = await fetch(BASE_URL, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data as ITaskWithServer[];
  },
  /**
   *получить задачу по ID
   */
  getById: async (id: string): Promise<ITaskWithServer> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data as ITaskWithServer;
  },
  /**
   *обновить задачу
   */
  change: async ({ id, ...dto }: IChangeTaskDTO): Promise<ITaskWithServer> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(dto),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data as ITaskWithServer;
  },
};
