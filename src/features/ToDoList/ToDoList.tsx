import { Task } from "../Task/Task";
import { useTasksManager } from './useTasksManager'

export const ToDoList = () => {
    const { searchValue, changeSearchValue, searchedTasks, deleteTask } = useTasksManager()

        return (
        <div>
            <div>To Do List:</div>
            <input type="text" placeholder="поиск" value={searchValue} onChange={changeSearchValue}/>
            
            <div>
                {searchedTasks.map((task) => 
                <Task 
                key={task.name} 
                name={task.name} 
                description={task.description}
                onDelete={() => deleteTask(task.name)}
                />)}
            </div>
        </div>
                )
            }
