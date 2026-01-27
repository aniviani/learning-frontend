import { useState, type ChangeEventHandler } from 'react'
import styles from'./Input.module.css'

export const Input = () => {

    const [value, setValue] = useState('')

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
        
        console.log(event.target.value)
    }
    return (
    <>
        <input type="text" className={styles.input} value={value} onChange={handleChange}/>
        <text>вы ввели: {value} </text>
    </>
    )
}