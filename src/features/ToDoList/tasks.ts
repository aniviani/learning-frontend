export type TTask = {
    name: string;
    description: string;
    done: boolean
}

export const tasks: TTask[] = [
        {name: 'задача 1',
        description: 'описание 1',
        done: true},
        {name: 'задача 2',
        description: 'описание 2',
        done: true},
        {name: 'задача 3',
        description: 'описание 3',
        done: false},
        {name: 'задача 4',
        description: 'описание 4',
        done: true}]