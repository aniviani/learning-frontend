
interface IProps {
    number: number;
    onDelete: (params: {number: number}) => void;
}

export const NumberCard = ({number, onDelete}: IProps) => {

const handleDelete = () => {
    onDelete({number})
}

    return (
        <>
            <div>{number}</div>
            <button onClick={handleDelete}>удалить</button>
        </>
    )
}