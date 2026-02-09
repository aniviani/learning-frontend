import { type FC } from "react";

interface IProps {
    name: string;
    description: string
    onDelete: () => void; 
}

export const Task: FC<IProps> = ({name, description, onDelete}) => {


return (
    <div>
            <div>{name}</div> 
            <div>{description}</div>
            <button onClick={onDelete}>Удалить</button>
    </div>
)
} 