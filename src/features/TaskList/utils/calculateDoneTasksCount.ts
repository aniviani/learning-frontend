import type { ITask } from "../model/ITask";

interface IParams {
    tasks: ITask[];
}

export const calculateDoneTasksCount = ({tasks}: IParams): number => {

    let count: number = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done === true) {
            count ++;
        }
    }

    return count
}