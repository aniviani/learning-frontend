import { StarShip } from './ui/StarShip.tsx';
import styles from './StarShips.module.css';
import { useStarShipsQuery } from './model/useStarShipsQuery.ts';

export const StarShips = () => {
  const { isLoading, starShips, loadStarShips, error } = useStarShipsQuery();

  return (
    <div>
      <div>StarShips</div>
      {isLoading && <div>Loading...</div>}
      {!starShips && (
        <button
          onClick={loadStarShips}
          disabled={isLoading}
        >
          загрузить StarShips
        </button>
      )}
      {error && <div>что-то пошло не так...</div>}
      <div className={styles.container}>
        {starShips &&
          starShips.map((starShip) => (
            <StarShip
              key={starShip.name}
              name={starShip.name}
              model={starShip.model}
              manufacturer={starShip.manufacturer}
              cost_in_credits={starShip.cost_in_credits}
            />
          ))}
      </div>
    </div>
  );
};
