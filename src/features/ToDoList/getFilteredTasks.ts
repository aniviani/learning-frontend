import { type TTask } from "./tasks.ts"

export const getFilteredTasks = (searchValue: string, tasks: TTask[]): TTask[] => {
    const doneTasks = tasks.filter((task) => task.done === true)
    
    if (searchValue === '') {
        return doneTasks
    }
    
    return doneTasks.filter((task) =>
        task.name.includes(searchValue))
}