import { useState, type FC } from "react";

interface IProps {
    initialValue: number
    step: number
}

export const Counter2: FC <IProps> = ({step, initialValue}) => {

    const [value, setValue] = useState(initialValue)

    const increment = () => {
        setValue((previousValue) => {
            const nextValue = previousValue + step

            if(nextValue > 10) {
                console.log('предупреждение!!!')
            }

            return nextValue
        }) 
    }

    const decrement = () => {
         setValue((previousValue) => {
            return previousValue - step
        }) 
    }

    return (
    <>
        <div>Counter2: {value}</div>
        <div>Step: {step}:</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
    )
}