import { UserCard } from "../UserCard/UserCard"

export const UserCardList = () => {

const person1 = {
name: 'Nastya',
age: 21
}

const person2 = {
name: 'Roma',
age: 24
}

const people = [ person1, person2 ]

//    onDelete: (params: {name: string; age: number}) => void;
const handleDelete = (params: {name: string; age: number}) => {
  console.log(`нажата кнопка удалить из компонента App ${params.name} ${params.age}`)
}

const handleChange = (params: {name: string; age: number}) => {
  console.log(`нажата кнопка редактировать из компонента App ${params.name} ${params.age}`)
}

  return (
  <>
    <UserCard name={ person1.name } age={ person1.age } onDelete={ handleDelete } onChange={ handleChange}/>
    <UserCard name={ person2.name } age={ person2.age } onDelete={ handleDelete } onChange={ handleChange}/>

    <div>
      {people.map((person) => 
    <UserCard key={person.name} name={person.name} age={person.age} onDelete={handleDelete} onChange={handleChange}/>
    )}
    </div>
  
  </>
  )
}
