import { useState } from "react"
import styles from "./CitiesList.module.css"
import { sortCities } from "./sortCities"

export const CitiesList = () => {
    const cities = ['Тула', 'Москва', 'астрахань', 'Санк-Петербург', 'ясногорск', 'Уфа']

    const [sort, setSort] = useState< 'asc' | 'desc' >('asc')
    
    const sortedCities = sortCities({sort, cities: [...cities]});

return (
    <div className={styles.container}>
        {sortedCities.map((city) => (
            <div key={city} className={styles.item}>{city}</div>
        ))}
        
        <select value={sort} onChange={(event) => setSort(event.target.value as 'asc' | 'desc')}>
            <option value='asc'>от А до Я</option>
            <option value='desc'>от Я до А</option>
        </select>
    </div>
)
}