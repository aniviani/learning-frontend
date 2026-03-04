import { useState } from 'react';
import styles from './AddressesList.module.css';
import { type TAddress } from '../../../features/AddressesList/sort-addresses/utils/sortAddresses.ts';
import { Modal } from '../../../shared/ui/Modal/Modal.tsx';
import { AddAddressForm } from '../../../features/AddressesList/add-address/ui/AddAddressForm.tsx';
import { SortSelect } from '../../../features/AddressesList/sort-addresses/ui/SortSelect.tsx';
import { FilterSelect } from '../../../features/AddressesList/filter-addresses/ui/FilterSelect.tsx';
import { SearchInput } from '../../../features/AddressesList/search-addresses/ui/SearchInput.tsx';
import { useAddAddress } from '../../../features/AddressesList/add-address/model/useAddAddress.ts';
import { useSortAddresses } from '../../../features/AddressesList/sort-addresses/model/useSortAddresses.ts';
import { useFilterAddress } from '../../../features/AddressesList/filter-addresses/model/useFilterAddress.ts';
import { useSearchAddresses } from '../../../features/AddressesList/search-addresses/model/useSearchAddresses.ts';

export const AddressesList = () => {
  const [addresses, setAddresses] = useState<TAddress[]>([]);

  const { setSort, sort, sortedAddresses } = useSortAddresses({ addresses });

  const { filter, setFilter, filteredAddresses } = useFilterAddress({
    sortedAddresses,
  });

  const { setSearch, search, searchedAddresses } = useSearchAddresses({
    addresses: filteredAddresses,
  });

  const { addAddress, openCreateAddressModal, setOpenCreateAddressModal } =
    useAddAddress({
      setAddresses,
      addresses,
    });

  return (
    <div>
      <SortSelect
        sort={sort}
        setSort={setSort}
      />
      <FilterSelect
        filter={filter}
        setFilter={setFilter}
      />
      <SearchInput
        search={search}
        setSearch={setSearch}
      />

      <button onClick={() => setOpenCreateAddressModal(true)}>
        Добавить адрес
      </button>
      {openCreateAddressModal && (
        <Modal close={() => setOpenCreateAddressModal(false)}>
          <AddAddressForm
            onAddAddress={(newAddress) => addAddress({ newAddress })}
          />
        </Modal>
      )}

      <div className={styles.container}>
        {searchedAddresses.map((address) => (
          <div
            key={address.country}
            className={styles.item}
          >
            {address.country}-{address.city}
          </div>
        ))}
      </div>
    </div>
  );
};
