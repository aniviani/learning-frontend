import {useState} from 'react';
import styles from './AddressesList.module.css';
import {sortAddresses, type TAddress} from './sort-addresses/utils/sortAddresses.ts';
import {getFilteredAddresses} from './filter-addresses/utils/getFiltredAddresses.ts';
import {searchAddresses} from './search-addresses/utils/searchAddresses.ts';
import {Modal} from '../../shared/ui/Modal/Modal';
import {AddAddressForm} from './AddAddressForm/AddAddressForm';
import {SortType} from "./sort-addresses/types/SortType.ts";
import {SortSelect} from "./sort-addresses/ui/SortSelect.tsx";
import {FilterSelect} from "./filter-addresses/ui/FilterSelect.ts";
import {SearchInput} from "./search-addresses/ui/SearchInput.tsx";
import {useAddAddress} from "./add-address/model/useAddAddress.ts";

export const AddressesList = () => {
  const [sort, setSort] = useState<SortType>(SortType.ASC);
  const [filter, setFilter] = useState<'Россия' | 'Франция' | 'Италия' | 'all'>(
    'all',
  );
  const [search, setSearch] = useState<string>('');
  const [addresses, setAddresses] = useState<TAddress[]>([]);
  const [openCreateAddressModal, setOpenCreateAddressModal] =
    useState<boolean>(false);

  const sortedAddresses = sortAddresses({ sort, addresses });
  const filteresAddresses = getFilteredAddresses({
    filter,
    addresses: sortedAddresses,
  });
  const searchedAddresses = searchAddresses({
    search,
    addresses: filteresAddresses,
  });

  const {addAddress} = useAddAddress({setAddresses, addresses, setOpenCreateAddressModal})

  return (
    <div>
        <SortSelect sort={sort} setSort={setSort}/>
        <FilterSelect filter={filter} setFilter={setFilter}/>
        <SearchInput search={search} setSearch={setSearch}/>

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
