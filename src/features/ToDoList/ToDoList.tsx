import { useState } from "react";
import { Task } from "../Task/Task";
import { tasks } from "./tasks";


export const ToDoList = () => {
    const [state, setState] = useState()

        const doneTasks = tasks.filter((task) => task.done === true)
        
        return (
        <div>
            <div>To Do List:</div>
            <div>
                {doneTasks.map((task) => 
                <Task 
                key={task.name} 
                name={task.name} 
                description={task.description}
                />)}
            </div>
        </div>
                )
            }
