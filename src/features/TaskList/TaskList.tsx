import { useState, type ChangeEventHandler } from 'react'
import { type ITask } from './model/ITask'
import { Task } from './ui/Task/Task'
import { calculateDoneTasksCount } from './utils/calculateDoneTasksCount'

export const TaskList = () => {

const [ tasks, setTasks ] = useState<ITask[]>([
    {
        id: crypto.randomUUID(),
        name: 'задача 1',
        done: true,
    },
    {
        id: crypto.randomUUID(),
        name: 'задача 2',
        done: false,
    }
])

const [ nameTask, setNameTask ] = useState<string>('')

const handleNameTaskChange: ChangeEventHandler<HTMLInputElement>= (event) => {
    const newNameTask = event.target.value
    setNameTask(newNameTask)
}

const handleAddTask = () => {
    const newTask: ITask = {
        id: crypto.randomUUID(),
        name: nameTask,
        done: false,
    }
    setTasks([...tasks, newTask])

    setNameTask('')
}

const doneTasks = calculateDoneTasksCount({tasks})

const checkTask = (params: {id: string; newChecked: boolean}) => {
    setTasks(tasks.map((task) => {
        if (task.id === params.id) {
            return {...task, done: params.newChecked}
        }
        return task
    }))
}

    return (
        <div>
            <div>Task List</div>
            <input type='text' value={nameTask} onChange={handleNameTaskChange}/>
            <button onClick={handleAddTask}>добавить</button>
            <div>
                {tasks.map((task) => 
                <Task 
                key={task.id} 
                id={task.id}
                name={task.name}
                checked={task.done}
                onCheck={checkTask}
                />)}
            </div>
            <span>завершено {doneTasks} задач</span>
        </div>
    )
}