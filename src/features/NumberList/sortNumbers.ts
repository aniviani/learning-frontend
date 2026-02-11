interface IParams {
    sort: 'asc' | 'desc';
    numbers: number[];
}

export const sortNumbers = ({sort, numbers}: IParams): number[] => {
    if (sort === 'asc') {
        return numbers;
    }
    return numbers.reverse()
}