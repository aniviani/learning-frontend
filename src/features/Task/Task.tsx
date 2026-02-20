import { type FC } from "react";
import {Button} from '../../shared/ui/Button/Button'

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
            <Button 
                onClick={(event) => {
                    event.stopPropagation();

                    onDelete()
                }}
            >
                Удалить
            </Button>
    </div>
)
} 

