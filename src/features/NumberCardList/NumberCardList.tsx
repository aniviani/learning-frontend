import { useState } from "react"
import { NumberCard } from "../NumberCard/NumberCard"

export const NumberCardList = () => {

    const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6])


const handleDelete = (params: {number: number}) => {
    console.log(`нажата кнопка удалить ${params.number}`)
   
   const numbersAfterDelete = numbers.filter((number) => number !== params.number)
   setNumbers(numbersAfterDelete)
}

    return (
        <>
        <div>
            {numbers.map((number) => (
                <NumberCard key={number} number={number} onDelete={handleDelete}/>
            ))}
        </div>
        </>
    )
}