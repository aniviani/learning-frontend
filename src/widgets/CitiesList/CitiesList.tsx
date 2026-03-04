import { useState } from 'react';
import styles from './CitiesList.module.css';
import { City } from './ui/City.tsx';
import { useDeleteCity } from '../../features/CitiesList/delete-city/model/useDeleteCity.ts';
import { AddCityForm } from '../../features/CitiesList/add-city/ui/AddCityForm.tsx';
import { SearchInput } from '../../features/CitiesList/search-city/ui/SearchInput.tsx';
import { SortSelect } from '../../features/CitiesList/sort-cities/ui/SortSelect.tsx';
import { useAddCity } from '../../features/CitiesList/add-city/model/useAddCity.ts';
import { useSortCity } from '../../features/CitiesList/sort-cities/model/useSortCity.ts';
import { useSearchCity } from '../../features/CitiesList/search-city/model/useSearchCity.ts';
import { searchCities } from '../../features/CitiesList/search-city/utils/searchCities.ts';

export const CitiesList = () => {
  const [cities, setCities] = useState<string[]>([
    'Тула',
    'Москва',
    'астрахань',
    'Санк-Петербург',
    'ясногорск',
    'Уфа',
  ]);

  const { sort, setSort, sortedCities } = useSortCity({ cities });
  const { searchedCities, changeSearchValue, searchValue } = useSearchCity({
    searchCities,
    sortedCities,
  });
  const { handleCityDelete } = useDeleteCity({ cities, setCities });
  const { addCity } = useAddCity({ cities, setCities });

  return (
    <div>
      <SortSelect
        sort={sort}
        setSort={setSort}
      />

      <AddCityForm onSubmit={addCity} />

      <SearchInput
        searchValue={searchValue}
        changeSearchValue={changeSearchValue}
      />

      <div className={styles.container}>
        {searchedCities.map((city) => (
          <City
            key={city}
            city={city}
            onDelete={handleCityDelete}
          />
        ))}
      </div>
    </div>
  );
};
