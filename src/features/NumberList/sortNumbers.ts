interface IParams {
    sort: 'asc' | 'desc';
    numbers: number[];
}

export const sortNumbers = ({sort, numbers}: IParams): number[] => {
    if (sort === 'asc') {
        return numbers.sort((previousElement, nextElement) => {
            if(previousElement < nextElement) {
                return -1
            }

            if(nextElement < previousElement) {
                return 1
            }

            return 0
        })
    }
    
    return numbers.sort((previousElement, nextElement) => {
        if (previousElement < nextElement) {
            return 1
        }

        if (nextElement < previousElement) {
            return -1
        }
         return 0
    })
}