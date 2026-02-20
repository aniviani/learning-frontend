import { Child } from "../Child/Child"
import { ChildChild } from "../ChildChild/ChildChild"

export const Parent = () => {
    const time = '12.03.2004'
    const children = [
        {name: 'n', age: 22}, 
        {name: 'k', age: 22}
    ]

    const obj = {
        eat: 'мясо'
    }

    const handleEat = (a: string) => {

        console.log('покормить', a)
    }

    return (
    <div>
        {children.map((child) => <Child myName={child.name} onIProgolodalsya={handleEat} />)
        }
    </div>
    )
}