export const Parent = () => {
    const children = [
        {name: 'n', age: 22}, 
        {name: 'k', age: 22}
    ]
const obj = {name: 'a', age: 22};

const { name, age } = obj;

interface IParams {
    a: string;
    // b: string;
    // c: string;
   // eat: string;
}

    const handleEat = (a: IParams) => {
        console.log('покормить', a.a)
    }
    
    const handleDrink = (a: IParams) => {
        console.log('напоить', a.a)
    }

    return (
    <div>
        {children.map((child) => <Child myName={child.name} onIProgolodalsya={handleEat} onIWantDrink />)
        }
    </div>
    )
}

export const Child = ({myName, onIProgolodalsya,onIWantDrink}) => {


    const handeleClick = () => {
    onIProgolodalsya({a:'meat'})
    }

    const handeleClick2 = () => {
    onIWantDrink({a:'milk'})
    }
    
    return (
        <div>
            <button onClick={handeleClick}>я голодный</button>
            <button onClick={handeleClick2}>я хочу пить</button>
        </div>
       
    )
}