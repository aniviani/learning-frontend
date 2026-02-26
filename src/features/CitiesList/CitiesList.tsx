import { useState, type ChangeEventHandler } from "react"
import styles from "./CitiesList.module.css"
import { sortCities } from "./sortCities"
import { City } from '../City/City'


     const searchCities = (params: {searchValue: string; cities: string[]}): string[] => {
        const searchedCities = params.cities.filter((city) => city.includes(params.searchValue))
        return searchedCities
    }

export const CitiesList = () => {

    const [sort, setSort] = useState< 'asc' | 'desc' >('asc')
    const [cities, setCities] = useState<string[]>(['Тула', 'Москва', 'астрахань', 'Санк-Петербург', 'ясногорск', 'Уфа'])
    const [addedCity, setAddedCity] = useState<string>('')
    const [searchValue, setSearchValue] = useState<string>('')

    console.log('render')

    const sortedCities = sortCities({sort, cities});
    const searchedCities = searchCities({searchValue, cities: sortedCities})

    const handleCityDelete = (params: {city: string}) => {
        const citiesAfterDelete = cities.filter((city) => city !== params.city)
        setCities(citiesAfterDelete)

    }

    const handleCityAdd: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newCityAdd = event.target.value
        setAddedCity(newCityAdd)
    }

    const addCity = () => {

        if (addedCity === '') {
            return
        }

        if (cities.includes(addedCity)) {
            setAddedCity('')
            return
        }

        const newCities = [...cities, addedCity]
        setCities(newCities)
        setAddedCity('')
    }

    const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchValue(event.target.value)
    }

   


return (
    <div>
         <select value={sort} onChange={(event) => setSort(event.target.value as 'asc' | 'desc')}>
            <option value='asc'>от А до Я</option>
            <option value='desc'>от Я до А</option>
        </select>

        <input type="text" placeholder="введите город" value={addedCity} onChange={handleCityAdd}/>
        <button onClick={addCity}>добавить</button>

        <input type="text" placeholder="поиск города" value={searchValue} onChange={changeSearchValue}/>

    <div className={styles.container}>
        {searchedCities.map((city) => (
            <City key={city} city={city} onDelete={handleCityDelete}/>
        ))}
    </div>

    </div>

)
}