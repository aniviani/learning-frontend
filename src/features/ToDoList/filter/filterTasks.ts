import type { TTask } from "../tasks"
import { TaskStatus } from "./useFilterTasks";

interface IParams {
    tasks: TTask[];
    filter: TaskStatus
}

export const filterTasks = ({tasks, filter}: IParams): TTask[] => {
    if (filter === TaskStatus.ALL) {
        return tasks
    }

    return tasks.filter((task) => task.status === filter)
}