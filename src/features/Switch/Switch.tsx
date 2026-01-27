import { useState, type FC } from "react"

export const Switch: FC = () => {
    const [isOn, setIsOn] = useState(true)
    
    const sw = () => {
        setIsOn(!isOn)
    }
    
    return (
    <>
        <div>Задание 2</div>
        <button onClick={sw}>Переключить</button>
        <div>{isOn ? "Включено" : "Выключено"}</div>
    </>
    )
}
