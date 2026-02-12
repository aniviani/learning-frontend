import { type TAddress } from "./sortAddresses"

interface IParams {
    addresses: TAddress[];
    filter: 'Россия' | 'Франция' | 'Италия' | 'all'
}

export const getFilteredAddresses = ({addresses, filter}: IParams): TAddress[] => {
    if(filter === 'all') {
        return addresses
    }

    return addresses.filter((address) => address.country === filter)

}