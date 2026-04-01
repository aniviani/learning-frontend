import type {Dispatch, SetStateAction} from "react";
import {tasksApi} from "../api/tasksApi.ts";
import type {ITaskWithServer} from "../ITaskWithServer.ts";

interface IParams {
    setTasks: Dispatch<SetStateAction<ITaskWithServer[] | null>>
}

interface IResult {
    createTask: (params: {title: string, description: string}) => Promise<void>;
}

export const useCreateTaskMutation = ({setTasks}: IParams): IResult => {
    const createTask: IResult['createTask'] = async ({title, description}) => {
       try{
           const createdTask = await tasksApi.create({id: crypto.randomUUID(), title, completed: false, description})

           setTasks((previousTasks) => {
               if (previousTasks === null) {
                   throw new Error('нельзя выполнить задачу')
               }
               return [...previousTasks, createdTask];
           })
       } catch (error) {
           console.error(error);
       }

    }
    return {createTask}
}