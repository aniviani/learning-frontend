import { useState, type FC, type ChangeEventHandler } from "react";

interface IProps {
    rate: number
}

export const Converter: FC<IProps> = ({ rate }) => {
    const [rubles, setRubles] = useState<number>(0)
    const [dollars, setDollars] = useState<number>(0)
    
    const convert = () => {
        setDollars(rubles / rate)
    }
    
    const handleRublesChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setRubles(event.target.valueAsNumber)
    }

    return (
        <>
            <div>задание 4: конвертация</div>
            <input type="number" value={rubles} onChange={handleRublesChange}/>
            <button onClick={convert}>Конвертировать</button>
            <div>Результат: {dollars.toFixed(2)} $</div>
        </>
    )
}
