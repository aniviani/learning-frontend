import { PersonCard } from "./features/PersonCard/PersonCard"

export const App = () => {
  
  const people = [
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
  ]

  const handleDelete = (params: {firstname: string; name: string; lastname: string; birthday: string}) => {
    console.log(`нажата кнопка удалить.. ${params.firstname} ${params.name} ${params.lastname} ${params.birthday}`)
  }
  
  const handleChange = (params: {firstname: string; name: string; lastname: string; birthday: string}) => {
    console.log(`нажата кнопка редактировать.. ${params.firstname} ${params.name} ${params.lastname} ${params.birthday}`)
  }

  return (
  <>
  <div>
    {people.map((person) =>
    <PersonCard 
    key={person.id} 
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
