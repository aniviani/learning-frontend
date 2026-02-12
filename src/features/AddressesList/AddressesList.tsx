import { useState } from "react"
import styles from './AddressesList.module.css'
import { sortAddresses } from "./sortAddresses"
import { getFilteredAddresses } from "./getFiltredAddresses"
import { searchAddresses } from "./searchAddresses"
import { type TAddress } from "./sortAddresses"
import { Modal } from "../../shared/ui/Modal/Modal"
import { AddAddressForm } from "./AddAddressForm/AddAddressForm"

export const AddressesList = () => {

const [sort, setSort] = useState< 'asc' | 'desc' >('asc')
const [filter, setFilter] = useState< 'Россия' | 'Франция' | 'Италия' | 'all'>('all')
const [search, setSearch] = useState<string>('')
const [addresses, setAddresses] = useState<TAddress[]>([])
const [openCreateAddressModal, setOpenCreateAddressModal] = useState<boolean>(false)

const sortedAddresses = sortAddresses({sort, addresses})
const filteresAddresses = getFilteredAddresses({filter, addresses: sortedAddresses})
const searchedAddresses = searchAddresses({search, addresses: filteresAddresses})

const addAddress = ({newAddress}: {newAddress: TAddress} ) => {
    
    setAddresses([...addresses, newAddress])
    setOpenCreateAddressModal(false)
}

return (
    <div>
        
        <select value={sort} onChange={(event) => setSort(event.target.value as 'asc' | 'desc')} name="select">
            <option value="asc">по возрастанию</option>
            <option value="desc">по убыванию</option>
        </select>
        
        <select value={filter} onChange={(event) => setFilter(event.target.value as 'Россия' | 'Франция' | 'Италия' | 'all')} name="select">
            <option value="Россия">Россия</option>
            <option value="Франция">Франция</option>
            <option value="Италия">Италия</option>
            <option value="all">все</option>
        </select>
        
        <input value={search} type="text" placeholder="поиск.."  onChange={(event) => setSearch(event.target.value)} />
        
        <button onClick={() => setOpenCreateAddressModal(true)}>Добавить адрес</button>
        {openCreateAddressModal && 
        <Modal close={() => setOpenCreateAddressModal(false)} >
            <AddAddressForm onAddAddress={(newAddress) => addAddress({newAddress})}/>
        </Modal>}
        

    <div className={styles.container}>
            {searchedAddresses.map((address) => (
                <div key={address.country} className={styles.item}>{address.country}-{address.city}</div>
        ))}

    </div>
    </div>
    
)
}