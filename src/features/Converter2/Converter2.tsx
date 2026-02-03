import { useState, type FC, type ChangeEventHandler } from "react";

interface IProps {
    rate: number
}

export const Converter2: FC<IProps> = ({ rate }) => {
    const [rubles, setRubles] = useState<number | undefined>(undefined)
    const [dollars, setDollars] = useState<number>(0)
    
    const handleRublesChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = (event.target.valueAsNumber)

        if(Number.isNaN(value)) {
            setDollars(0);
            setRubles(undefined);
            return;
        } 
        
        setRubles(value)
        setDollars(value / rate)
    }

    return (
        <>
            <div>задание 4*: конвертация</div>
            <input type="number" value={rubles} onChange={handleRublesChange}/>
            <div>Результат: {dollars.toFixed(2)} $</div>
        </>
    )
}
