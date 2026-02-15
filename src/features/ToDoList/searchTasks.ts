import type { TTask } from "./tasks";

interface IParams {
    search: string;
    tasks: TTask[]
}

export const searchAddresses = ({search, tasks}: IParams): TTask[] => {
    if (search === ''){
        return tasks
    }

    return tasks.filter((task) => task.name.includes(search))
}