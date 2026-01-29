import { useState } from "react";

export const Checkbox = () => {
    const [isOn, setIsOn] = useState<boolean>(false)

    const sw = () => {
        setIsOn(!isOn)
    }
    
    return (
    <>
        <div>Задание 6</div>
        <input type="checkbox" onClick={sw}/>
        <div>{isOn ? "Включено" : "Выключено"}</div>
    </>
    )
}

