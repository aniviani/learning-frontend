import { Planet } from './ui/Planet.tsx';
import styles from './Planets.module.css';
import { usePlanetsQuery } from './model/usePlanetsQuery.ts';

export const Planets = () => {
  const { isLoading, planets, loadPlanets, error } = usePlanetsQuery();

  return (
    <div>
      <div>Planets</div>
      {isLoading && <div>Loading...</div>}
      {!planets && (
        <button
          onClick={loadPlanets}
          disabled={isLoading}
        >
          загрузить Planets
        </button>
      )}
      {error && <div>что-то пошло не так...</div>}
      <div className={styles.container}>
        {planets &&
          planets.map((planet) => (
            <Planet
              key={planet.name}
              name={planet.name}
              climate={planet.climate}
              terrain={planet.terrain}
              population={planet.population}
            />
          ))}
      </div>
    </div>
  );
};
