import { Task } from "../Task/Task";
import { useTasksManager } from './useTasksManager'
import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal.tsx";
import type {TTask} from "./tasks.ts";
import {EditTaskForm} from "./ui/EditTaskForm.tsx";
import { sortTasks } from "./sortTasks.ts";

export const ToDoList = () => {
    const { searchValue, changeSearchValue, searchedTasks, deleteTask } = useTasksManager()
    const [editableTask, setEditableTask] = useState<TTask | null>(null)
    const [tasks, setTasks] = useState<TTask[]>(searchedTasks);
    const [ sort, setSort] = useState<'asc' | 'desc'>('asc')
    const [ filter, setFilter] = useState< 'все задачи' | 'задача 1' | 'задача 2' | 'задача 3' | 'задача 4'>('все задачи')
    const [openCreateTaskModal, setOpenCreateTaskModal] = useState<boolean>(false)
    
    const sortedTasks = sortTasks({sort, tasks})
    

    const editTask = (task: TTask) => {
        setEditableTask(task);
    }
    
    const handleSave = (newName: string, newDescription: string) => {
        if (editableTask === null) {
            return;
        }
        
        setTasks(tasks.map((task) => {
            if (task.name === editableTask.name) {
                task.name = newName;
                task.description = newDescription;
            }
            return task;
        })
    );
    
    setEditableTask(null);
};

        return (
        <div>
            <div>To Do List:</div>
            <input 
                type="text" 
                placeholder="поиск" 
                value={searchValue} 
                onChange={changeSearchValue}
             />
            
            <select value={sort} onChange={(event) => setSort(event.target.value as 'asc' | 'desc')} name="select">
                <option value="asc">от А до Я</option>
                <option value="desc">от Я до А</option>
            </select>

             <select value={filter} onChange={(event) => setFilter(event.target.value as 'задача 1' | 'задача 2' | 'задача 3' | 'задача 4' | 'все задачи')} name="select">
                <option value="все задачи">все задачи</option>
                <option value="задача 1">задача 1</option>
                <option value="задача 2">задача 2</option>
                <option value="задача 3">задача 3</option>
                <option value="задача 4">задача 4</option>
            </select>

            <div>
                {sortedTasks.map((task) => 
                <Task
                onEdit={() => editTask(task)}
                key={task.name} 
                name={task.name} 
                description={task.description}
                onDelete={() => deleteTask(task.name)}
                />)}
            </div>
            {editableTask && 
             (<Modal close={() => setEditableTask(null)}>
                <EditTaskForm 
                    name={editableTask.name} 
                    description={editableTask.description} 
                    onSave={handleSave}
                />
             </Modal>)}
        </div>
        )
    }
