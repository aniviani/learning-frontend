interface IParams {
    sort: 'asc' | 'desc';
    addresses: TAddress[]
}

export type TAddress = {
    city: string;
    country: string;
}

export const sortAddresses = ({sort, addresses}: IParams): TAddress[] => {

    if (sort === 'asc') {
        return addresses.toSorted((previousElement, nextElement) => {
            if (previousElement.country < nextElement.country) {
                return -1
            }
            if (previousElement.country > nextElement.country) {
                return 1
            }
            return 0
        })
    }

        return addresses.toSorted((previousElement, nextElement) => {
            if (previousElement.country < nextElement.country) {
                return 1
            }
            if (previousElement.country > nextElement.country) {
                return -1
            }
            return 0
        })
    }
