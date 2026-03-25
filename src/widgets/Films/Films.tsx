import { Film } from './ui/Film.tsx';
import styles from './Films.module.css';
import { useFilmsQuery } from './model/useFilmsQuery.ts';

export const Films = () => {
  const { isLoading, films, error } = useFilmsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>что-то пошло не так...</div>;
  }

  return (
    <div>
      <div>Films</div>
      <div className={styles.container}>
        {films.map((film) => (
          <Film
            key={film.created}
            created={film.created}
            director={film.director}
            edited={film.edited}
            episode_id={film.episode_id}
          />
        ))}
      </div>
    </div>
  );
};
