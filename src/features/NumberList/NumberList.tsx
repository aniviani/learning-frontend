import { useState } from 'react';
import styles from './NumberList.module.css'
import { Button } from '../../shared/ui/Button/Button';
import { sortNumbers } from './sortNumbers';
import { numbers } from './numbers';

export const NumberList = () => {

const [sort, setSort] = useState<'asc' | 'desc'>('asc')

const sortedNumbers = sortNumbers({sort, numbers: [...numbers]})

return (
    <div className={styles.container}>
        {sortedNumbers.map((number) => (
            <div key={number} className={styles.number}>{number}</div>
        ))}
        <Button onClick={() => {
            setSort('asc')
        }}>по возрастанию</Button>
        <Button onClick={() => {
            setSort('desc')
        }}>по убыванию</Button>
    </div>
)
}
