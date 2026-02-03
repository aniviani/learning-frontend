import { type FC } from "react";

interface IProps {
    name: string;
    description: string
}

export const Task: FC<IProps> = ({name, description}) => {


return (
    <div>
            <div>{name}</div> 
            <div>{description}</div>
    </div>
)
} 