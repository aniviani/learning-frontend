import { useState, type FC } from "react";

interface IProps {
    step: number
}

export const Counter3 : FC<IProps> = ({step}) => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + step)
    }
    return (
    <>
        <div>задание 3</div>
        <button onClick={increment}>+</button>
        <div>Вы нажали {counter} раз</div>
    </>
    )
}