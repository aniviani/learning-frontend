import { useState, type FC } from "react";

interface IProps {
    step: number
    minValue: number
    maxValue: number
}

export const MaxMin: FC<IProps> = ({ step, minValue, maxValue }) => {
    const [value, setValue] = useState<number>(minValue)
    
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

    const reset = () => {
        setValue(minValue)
    }

    return (
    <>
        <div>Задание 1 и 5</div>
        <div>Counter: {value}</div>
        <div>Step: {step}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>сброс</button>
    </>
    )
}