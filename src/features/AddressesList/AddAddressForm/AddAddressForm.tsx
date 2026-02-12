import { useState, type FC } from "react"
import { Button } from "../../../shared/ui/Button/Button"
import { type TAddress } from "./../sortAddresses"

interface IProps {
    onAddAddress: (newAddress: TAddress) => void; 
}

export const AddAddressForm: FC<IProps> = ({onAddAddress}) => {

    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<'Россия' | 'Франция' | 'Италия'>('Италия')

    const addAddress = () => {
        if (city === '') {
            return 
        }
        onAddAddress({city, country})
        
    }

    return(
    <div>
        <input value={city} onChange={(event) => setCity(event.target.value)} type="text" placeholder="city..." />
        
        <select value={country} onChange={(event) => setCountry(event.target.value as 'Россия' | 'Франция' | 'Италия')}>
            <option value='Россия'>Россия</option>
            <option value='Франция'>Франция</option>
            <option value='Италия'>Италия</option>
        </select>

        <Button disabled={!city} onClick={addAddress}>добавить адрес</Button>
    </div>
    )
}