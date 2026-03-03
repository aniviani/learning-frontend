import type {TAddress} from "../../sort-addresses/utils/sortAddresses.ts";
import type {SetStateAction } from 'react'

interface IParams {
    setAddresses:  (value: SetStateAction<TAddress[]>) => void;
    addresses: TAddress[];
    setOpenCreateAddressModal:  (value: SetStateAction<boolean>) => void;
}

interface IResult {
    addAddress: ({newAddress}: {newAddress: TAddress}) => void;
}

export const useAddAddress = ({setAddresses, addresses, setOpenCreateAddressModal}: IParams): IResult => {
    const addAddress = ({ newAddress }: { newAddress: TAddress }) => {
        setAddresses([...addresses, newAddress]);
        setOpenCreateAddressModal(false);
    };
    return {addAddress}
}