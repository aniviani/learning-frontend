interface IParams {
    cities: string[];
    sort: 'asc' | 'desc';
}

export const sortCities = ({sort, cities}: IParams ): string[] => {

        if (sort === 'asc') {
            return cities.sort()
        }
        return cities.sort().reverse()
    }