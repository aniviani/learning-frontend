import { useState } from "react"

export const Switch = () => {
    const [isOn, setIsOn] = useState<boolean>(true)
    
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
