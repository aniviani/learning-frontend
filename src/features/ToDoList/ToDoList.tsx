import { Task } from "../Task/Task";
import { useTasksManager } from './useTasksManager'
import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal.tsx";
import type {TTask} from "./tasks.ts";
import {EditTaskForm} from "./ui/EditTaskForm.tsx";

export const ToDoList = () => {
    const { searchValue, changeSearchValue, searchedTasks, deleteTask } = useTasksManager()
    const [editableTask, setEditableTask] = useState<TTask | null>(null)

    const editTask = (task: TTask) => {
        setEditableTask(task);
    }

        return (
        <div>
            <div>To Do List:</div>
            <input type="text" placeholder="поиск" value={searchValue} onChange={changeSearchValue}/>
            
            <div>
                {searchedTasks.map((task) => 
                <Task
                onEdit={() => editTask(task)}
                key={task.name} 
                name={task.name} 
                description={task.description}
                onDelete={() => deleteTask(task.name)}
                />)}
            </div>
            {editableTask && <Modal close={() => setEditableTask(null)}><EditTaskForm name={editableTask.name} description={editableTask.description}/></Modal>}
        </div>
                )
            }
