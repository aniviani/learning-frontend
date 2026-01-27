import { useState, type FC } from "react"

interface IProps {
    step: number
}

export const Counter: FC<IProps> = ({step}) => {

    const [counter, setCounter] = useState(0)

    const increment1 = () => {
        setCounter(counter + step) 
    }

    const decrement1 = () => {
        setCounter(counter - step)
    }


    return (
    <>
        <div>Counter: {counter}</div>
        <div>Step: {step}:</div>
        <button onClick={increment1}>+</button>
        <button onClick={decrement1}>-</button>
    </>
    )
}