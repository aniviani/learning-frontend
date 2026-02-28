import styles from './City.module.css';

interface IProps {
  city: string;
  onDelete: (params: { city: string }) => void;
}

export const City = ({ city, onDelete }: IProps) => {
  const handleCityDelete = () => {
    onDelete({ city });
  };

  return (
    <div>
      <div className={styles.item}>{city}</div>
      <button onClick={handleCityDelete}>удалить</button>
    </div>
  );
};
