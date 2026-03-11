import type { FC } from 'react';
import styles from './StarShip.module.css';

interface IProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

export const StarShip: FC<IProps> = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
}) => {
  return (
    <div className={styles.container}>
      <div>название: {name}</div>
      <div>модель: {model}</div>
      <div>производитель: {manufacturer}</div>
      <div>стоимость: {cost_in_credits}</div>
    </div>
  );
};
