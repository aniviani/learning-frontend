import styles from './PersonCard.module.css';
import type { FC } from 'react';
import type { IPerson } from '../PersonCardList/PersonCardList.tsx';

interface IProps {
  id: string;
  firstname: string;
  name: string;
  lastname: string;
  birthday: string;
  onDelete: (params: IPerson) => void;
  onChange: (params: IPerson) => void;
}

export const PersonCard: FC<IProps> = ({
  id,
  firstname,
  name,
  lastname,
  birthday,
  onDelete,
  onChange,
}) => {
  const handleDeleteClick = () => {
    onDelete({ id, firstname, name, lastname, birthday });
  };

  const handleChangeClick = () => {
    onChange({ id, firstname, name, lastname, birthday });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <div className={styles.info}>
          <span>Фамилия: {firstname}</span>
          <span>Имя: {name}</span>
          <span>Отчество: {lastname}</span>
          <span>Дата рождения: {birthday}</span>
        </div>
      </div>

      <div className={styles.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, dicta
        consequatur nesciunt, libero ea molestias unde, quaerat enim voluptatum
        mollitia odio alias ut impedit distinctio quos animi adipisci velit
        cumque?
      </div>

      <button onClick={handleDeleteClick}>удалить</button>
      <button onClick={handleChangeClick}>редактировать</button>
    </div>
  );
};
