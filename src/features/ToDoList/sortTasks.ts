import type { TTask } from "./tasks";

interface IParams {
    sort: 'asc' | 'desc';
    tasks: TTask[]
}

export const sortTasks = ({sort, tasks}: IParams): TTask[] => {
    
    if (sort === 'asc') {
        return tasks.toSorted((previousElement, nextElement) => {
            if (previousElement < nextElement) {
                return -1
            }
            if (previousElement > nextElement) {
                return 1
            }
            return 0
        })
    }
    
    return tasks.toSorted((previousElement, nextElement) => {
        if (previousElement < nextElement) {
            return 1
        }
        if (previousElement > nextElement) {
            return -1
        }
            return 0
        })
    }

