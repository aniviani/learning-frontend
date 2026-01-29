import { useState, type ChangeEventHandler } from "react";

interface IProps {
    name: string
    surname: string
    age: number
    problem: string
    address: {
        city: string
        street: string
    }
}

export const Form = () => {

    const [form, setForm] = useState<IProps>({
        name: '',
        surname: '',
        age: 0,
        problem: '',
        address: {
            city: '',
            street: '',
        },
    })

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setForm((previousForm) => {
            return {
                ...previousForm,
                name: event.target.value,
            }
        })
    }

    const handleSurnameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setForm((previousForm) => {
            return {
                ...previousForm,
                surname: event.target.value,
            }
        })
    }

    const handleAgeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setForm((previousForm) => {
            return {
                ...previousForm,
                age: event.target.valueAsNumber,
            }
        })
    }

    const handleCityChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setForm((previousForm) => ({
            ...previousForm,
            address: {
                ...previousForm.address,
                city: event.target.value,
            },
        }))
    }
    
    const handleStreetChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setForm((previousForm) => ({
            ...previousForm,
            address: {
                ...previousForm.address,
                street: event.target.value,
            },
        }))
    }

    const handleProblemChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setForm((previousForm) => {
            return {
                ...previousForm,
                problem: event.target.value,
            }
        })
    }

    const handlerSubmit = () => {
        console.log(form)
        
        setForm({
            name: '',
            surname: '',
            age: 0,
            problem: '',
            address: {
                city: '',
                street: '',
            },
        })
    }

    return (
        <>
        <div>Задание 7:</div>
        <div>Введите имя: </div>
        <input type="text" value={form.name} onChange={handleNameChange}/>
        <div>Введите фамилию: </div>
        <input type="text" value={form.surname} onChange={handleSurnameChange}/>
        <div>Введите возраст: </div>
        <input type="number" value={form.age} onChange={handleAgeChange}/>
        <div>Введите город: </div>
        <input type="text" value={form.address.city} onChange={handleCityChange}/>
        <div>Введите улицу: </div>
        <input type="text" value={form.address.street} onChange={handleStreetChange}/>
        <div>Опишите проблему: </div>
        <textarea value={form.problem} onChange={handleProblemChange}/>
        <button onClick={handlerSubmit}>отправить</button>
        </>
    )
}