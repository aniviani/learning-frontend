import { useState } from "react"
import { PersonCard } from "../PersonCard/PersonCard"

interface IPerson {
id: string;
firstname: string;
name: string;
lastname: string;
birthday: string;
}

export const PersonCardList = () => {

  const [people, setPeople] = useState<IPerson[]>([
  {
    id: crypto.randomUUID(),
    firstname: 'Кренделев',
    name: 'Роман',
    lastname: 'Николаевич',
    birthday: '08.02.2002'
  },
  {
    id: crypto.randomUUID(),
    firstname: 'Анисимова',
    name: 'Анастасия',
    lastname: 'Андреевна',
    birthday: '12.03.2004'
  }
  ])

  const handleDelete = (params: {id: string; firstname: string; name: string; lastname: string; birthday: string}) => {
    console.log(`нажата кнопка удалить.. ${params.firstname} ${params.name} ${params.lastname} ${params.birthday}`)

    const peopleAfterDelete = people.filter((person) => person.id !== params.id)
    setPeople(peopleAfterDelete)
}
  
  const handleChange = (params: {id: string; firstname: string; name: string; lastname: string; birthday: string}) => {
    console.log(`нажата кнопка редактировать.. ${params.firstname} ${params.name} ${params.lastname} ${params.birthday}`)
  }

  return (
  <>
  <div>
    {people.map((person) =>
    <PersonCard 
    key={person.id} 
    id={person.id}
    firstname={person.firstname} 
    name={person.name} 
    lastname={person.lastname} 
    birthday={person.birthday} 
    onDelete={handleDelete}
    onChange={handleChange}
    />)}
  </div>

 
  </>
  )
}
