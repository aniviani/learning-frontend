import { UserCard } from "../UserCard/UserCard"
import { useState } from "react";

interface IPerson {
    id: string; 
    name: string;
    age: number;
}

export const UserCardList = () => {

const person1 = {
id: crypto.randomUUID(),
name: 'Nastya',
age: 21
}

const person2 = {
id: crypto.randomUUID(),
name: 'Roma',
age: 24
}

const [people, setPeople] = useState<IPerson[]>([ person1, person2 ])

//    onDelete: (params: {name: string; age: number}) => void;
const handleDelete = (params: {id: string; name: string; age: number}) => {
  console.log(`нажата кнопка удалить из компонента App ${params.name} ${params.age}`)

  const peopleAfterDelete = people.filter((person) => person.id !== params.id)
  setPeople(peopleAfterDelete)
}

const handleChange = (params: {id: string; name: string; age: number}) => {
  console.log(`нажата кнопка редактировать из компонента App ${params.name} ${params.age}`)
}

  return (
  <>
    <UserCard id={person1.id} name={ person1.name } age={ person1.age } onDelete={ handleDelete } onChange={ handleChange}/>
    <UserCard id={person2.id} name={ person2.name } age={ person2.age } onDelete={ handleDelete } onChange={ handleChange}/>

    <div>
      {people.map((person) => 
    <UserCard key={person.id} id={person.id} name={person.name} age={person.age} onDelete={handleDelete} onChange={handleChange}/>
    )}
    </div>
  
  </>
  )
}
