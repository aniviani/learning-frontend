const information = {
    name: 'Nastya',
    age: 21,
    telephone: '2222',
    surname: 'Anisimova',
    address: 'Myasnovo'
}

export const About = () => {
    return (
    <>
        <div>Имя: {information.name}</div>
        <div>Возраст: {information.age}</div>
        <div>Телефон: {information.telephone}</div>
        <div>Фамилия: {information.surname}</div>
        <div>Адрес: {information.address}</div>
    </> 
    )
}

