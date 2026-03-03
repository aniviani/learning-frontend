import type {SetStateAction} from 'react'

interface IParams {
    filter:  "Россия" | "Франция" | "Италия" | "all";
    setFilter:  (value: SetStateAction<"Россия" | "Франция" | "Италия" | "all">) => void
    ;
}

export const FilterSelect = ({filter, setFilter}: IParams) => {
    return (
        <select
            value={filter}
            onChange={(event) =>
                setFilter(
                    event.target.value as 'Россия' | 'Франция' | 'Италия' | 'all',
                )
            }
            name="select"
        >
            <option value="Россия">Россия</option>
            <option value="Франция">Франция</option>
            <option value="Италия">Италия</option>
            <option value="all">все</option>
        </select>
    )
}