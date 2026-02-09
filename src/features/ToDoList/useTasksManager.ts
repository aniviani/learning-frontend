import { useState, type ChangeEventHandler } from "react";
import { tasks as allTasks } from "../ToDoList/tasks";
import { type TTasks } from "../ToDoList/tasks";
import { getFilteredTasks } from "./getFilteredTasks";

interface IResult {
    searchValue: string;
    changeSearchValue: ChangeEventHandler<HTMLInputElement>;
    searchedTasks: TTasks[];
    deleteTask: (name: string) => void;
}

export const useTasksManager = (): IResult => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [tasks, setTasks] = useState<TTasks[]>(allTasks)
    
    const deleteTask: IResult['deleteTask'] = (name) => {
        setTasks(tasks.filter(task => task.name !== name))
    }
    
    const changeSearchValue: IResult['changeSearchValue'] = (event) => {
        setSearchValue(event.target.value)
    }
    
    const searchedTasks = getFilteredTasks(searchValue, tasks)
    return { searchValue, changeSearchValue, searchedTasks, deleteTask }
}