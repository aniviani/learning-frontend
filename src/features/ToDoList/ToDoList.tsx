import { Task } from "../Task/Task";
import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal.tsx";
import type {TTask} from "./tasks.ts";
import { EditTaskForm } from "./ui/EditTaskForm.tsx";
import { SortType, useSortTasks } from "./sort/useSortTasks.ts";
import { tasks as allTasks } from "../ToDoList/tasks";
import { useSearchTasks } from "./search/useSearchTasks.ts";
import { TaskStatus, useFilterTasks } from "./filter/useFilterTasks.ts";

export const ToDoList = () => {
    const [ tasks, setTasks ] = useState<TTask[]>(allTasks);
    const { sort, sortedTasks, handleSortChange } = useSortTasks({tasks})
    const { searchedTasks, searchValue, handleSearchChange } = useSearchTasks({tasks: sortedTasks})
    const { filter, filteredTasks, handleFilterChange } = useFilterTasks({tasks: searchedTasks})
    const [ editableTask, setEditableTask ] = useState<TTask | null>(null)
    
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
                onChange={handleSearchChange}
             />
            
            <select value={sort} onChange={handleSortChange} name="select">
                <option value={SortType.ASC}>от А до Я</option>
                <option value={SortType.DESC}>от Я до А</option>
            </select>

             <select value={filter} onChange={handleFilterChange} name="select">
                <option value={TaskStatus.ALL}>все задачи</option>
                <option value={TaskStatus.DONE}>готовые</option>
                <option value={TaskStatus.NOT_DONE}>не готовые</option>
            </select>

            <div>
                {filteredTasks.map((task) => 
                <Task
                onEdit={() => editTask(task)}
                key={task.name} 
                name={task.name} 
                description={task.description}
                onDelete={() => {}}
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
