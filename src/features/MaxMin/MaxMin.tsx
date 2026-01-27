import { useState, type FC } from "react";

interface IProps {
    step: number
    minValue: number
    maxValue: number
}

export const MaxMin: FC<IProps> = ({ step, minValue, maxValue }) => {
    const [value, setValue] = useState(minValue)
    
    const increment = () => {
        if (value + step <= maxValue) {
            setValue(value + step)
        } else{
            console.log('максимальное значение достигнуто')
        }
    }
    
    const decrement = () => {
        if (value - step >= minValue) {
            setValue(value - step)
        } else {
            console.log('минимальное значение достигнуто')
        }
        
    }

    return (
    <>
        <div>Задание 1</div>
        <div>Counter: {value}</div>
        <div>Step: {step}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
    )
}