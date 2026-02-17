import { type SetStateAction, useState } from 'react'
import { type TTask } from '../tasks';

interface IParams {
    setTasks: (value: SetStateAction<TTask[]>) => void;
}

interface IResult {
    editableTask: TTask | null;
    editTask: (params: {task: TTask}) => void;
    finishEditingTask: () => void;
    saveEditedTask: (params: {newName: string; newDescription: string}) => void;
}

export const useEditTask = ({setTasks}: IParams): IResult => {
    //для контроля состояния модалки
    const [ editableTask, setEditableTask ] = useState<TTask | null>(null)
    
    const editTask: IResult['editTask'] = ({task}) => {
        setEditableTask(task);
    }
    
    const saveEditedTask: IResult['saveEditedTask'] = ({newName, newDescription}) => {
            if (editableTask === null) {
                return;
            }
            
            setTasks((previousTasks) => previousTasks.map((task) => {
                if (task.id === editableTask.id) {
                    task.name = newName;
                    task.description = newDescription;
                }

                return task;
            }
            ))
        
        setEditableTask(null);
    };

    const finishEditingTask: IResult['finishEditingTask'] = () => {
        setEditableTask(null)
    }

    return {editableTask, editTask, saveEditedTask, finishEditingTask}
}