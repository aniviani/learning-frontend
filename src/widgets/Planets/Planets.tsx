import { Planet } from './ui/Planet.tsx';
import styles from './Planets.module.css';
import { usePlanetsQuery } from './model/usePlanetsQuery.ts';

export const Planets = () => {
  const { isLoading, planets, error } = usePlanetsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>что-то пошло не так...</div>;
  }

  return (
    <div>
      <div>Planets</div>
      <div className={styles.container}>
        {planets.map((planet) => (
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
