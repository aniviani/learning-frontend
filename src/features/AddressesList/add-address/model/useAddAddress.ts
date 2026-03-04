import type { TAddress } from '../../sort-addresses/utils/sortAddresses.ts';
import { type Dispatch, type SetStateAction, useState } from 'react';

interface IParams {
  setAddresses: (value: SetStateAction<TAddress[]>) => void;
  addresses: TAddress[];
}

interface IResult {
  addAddress: ({ newAddress }: { newAddress: TAddress }) => void;
  openCreateAddressModal: boolean;
  setOpenCreateAddressModal: Dispatch<SetStateAction<boolean>>;
}

export const useAddAddress = ({
  setAddresses,
  addresses,
}: IParams): IResult => {
  const [openCreateAddressModal, setOpenCreateAddressModal] =
    useState<boolean>(false);

  const addAddress = ({ newAddress }: { newAddress: TAddress }) => {
    setAddresses([...addresses, newAddress]);
    setOpenCreateAddressModal(false);
  };

  return { addAddress, openCreateAddressModal, setOpenCreateAddressModal };
};
