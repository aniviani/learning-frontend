import { type TAddress } from "./sortAddresses"

interface IParams {
    search: string;
    addresses: TAddress[]
}

export const searchAddresses = ({search, addresses}: IParams): TAddress[] => {
    if (search === ''){
        return addresses
    }

    return addresses.filter((address) => address.city.includes(search))
}