import type { FC } from 'react';
import styles from './Planet.module.css';

interface IProps {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

export const Planet: FC<IProps> = ({ name, climate, terrain, population }) => {
  return (
    <div className={styles.container}>
      <div>название: {name}</div>
      <div>климат: {climate}</div>
      <div>местность: {terrain}</div>
      <div>население: {population}</div>
    </div>
  );
};
