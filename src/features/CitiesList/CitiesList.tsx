import { useState } from "react"
import { Button } from "../../shared/ui/Button/Button"
import styles from "./CitiesList.module.css"
import { sortCities } from "./sortCities"

export const CitiesList = () => {
    const cities = ['Тула', 'Москва', 'Астрахань', 'Санк-Петербург', 'Ясногорск', 'Уфа']

    const [sort, setSort] = useState< 'asc' | 'desc' >('asc')
    
    const sortedCities = sortCities({sort, cities: [...cities]});

return (
    <div className={styles.container}>
        {sortedCities.map((city) => (
            <div key={city} className={styles.item}>{city}</div>
        ))}
        <Button onClick={ () => 
        setSort('asc')
        }>от А до Я</Button>
        <Button onClick={ () => 
            setSort('desc')
        }>от Я до А</Button>
    </div>
)
}