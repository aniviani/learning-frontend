import { useState, type ChangeEventHandler } from "react";


export const Form = () => {
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<number>()
    const [address, setAddress] = useState<string>('')
    const [problem, setProblem] = useState<string>('')

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value)
    }

    const handleSurnameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSurname(event.target.value)
    }

    const handleAgeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setAge(event.target.valueAsNumber)
    }

    const handleAddressChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setAddress(event.target.value)
    }

    const handleProblemChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setProblem(event.target.value)
    }

    const handlerSubmit = () => {
        console.log(name)
        console.log(surname)
        console.log(age)
        console.log(address)
        console.log(problem)

        setName('')
        setSurname('')
        setAge(undefined)
        setAddress('')
        setProblem('')
    }

    return (
        <>
        <div>Задание 7:</div>
        <div>Введите имя: </div>
        <input type="text" value={name} onChange={handleNameChange}/>
        <div>Введите фамилию: </div>
        <input type="text" value={surname} onChange={handleSurnameChange}/>
        <div>Введите возраст: </div>
        <input type="number" value={age} onChange={handleAgeChange}/>
        <div>Введите адрес: </div>
        <input type="text" value={address} onChange={handleAddressChange}/>
        <div>Опишите проблему: </div>
        <textarea value={problem} onChange={handleProblemChange}/>
        <button onClick={handlerSubmit}>отправить</button>
        </>
    )
}