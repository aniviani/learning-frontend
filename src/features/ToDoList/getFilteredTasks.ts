import { type TTasks } from "../ToDoList/tasks"

export const getFilteredTasks = (searchValue: string, tasks: TTasks[]): TTasks[] => {
    const doneTasks = tasks.filter((task) => task.done === true)
    
    if (searchValue === '') {
        return doneTasks
    }
    
    return doneTasks.filter((task) =>
        task.name.includes(searchValue))
}