import { TaskStatus } from "./filter/useFilterTasks";

export type TTask = {
    id: string;
    name: string;
    description: string;
    status: TaskStatus;
}

export const tasks: TTask[] = [
        {
        id: crypto.randomUUID(),
        name: 'задача 1',
        description: 'описание 1',
        status: TaskStatus.DONE},
        {
        id: crypto.randomUUID(),
        name: 'задача 2',
        description: 'описание 2',
        status: TaskStatus.DONE},
        {
        id: crypto.randomUUID(),
        name: 'задача 3',
        description: 'описание 3',
        status: TaskStatus.NOT_DONE},
        {
        id: crypto.randomUUID(),
        name: 'задача 4',
        description: 'описание 4',
        status: TaskStatus.DONE}]