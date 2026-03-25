import type { FC } from 'react';
import styles from './Films.module.css';

interface IProps {
  created: string;
  director: string;
  edited: string;
  episode_id: number;
}

export const Film: FC<IProps> = ({ created, director, edited, episode_id }) => {
  return (
    <div className={styles.container}>
      <div>создано: {created}</div>
      <div>режиссер: {director}</div>
      <div>отредактировано: {edited}</div>
      <div>эпизод: {episode_id}</div>
    </div>
  );
};
