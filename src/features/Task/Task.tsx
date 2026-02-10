import { type FC } from "react";

interface IProps {
    name: string;
    description: string
    onDelete: () => void;
    onEdit: () => void;
}

export const Task: FC<IProps> = ({name, description, onDelete, onEdit}) => {


return (
    <div onClick={onEdit}>
            <div>{name}</div> 
            <div>{description}</div>
            <button onClick={onDelete}>Удалить</button>
    </div>
)
} 