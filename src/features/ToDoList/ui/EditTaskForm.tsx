import {useState} from "react";
import { type FC} from "react";

interface IProps {
    name: string;
    description: string;
}
export const EditTaskForm: FC<IProps> = ({name: initialName, description: initialDescription}) => {
    const [name, setName] = useState<string>(initialName)
    const [description, setDescription] = useState<string>(initialDescription)

    
}