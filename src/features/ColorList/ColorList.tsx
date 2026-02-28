import styles from './ColorList.module.css';

export const ColorList = () => {
  const colors = ['red', 'blue', 'green', 'orange'];

  console.log(styles);

  const style = {
    color: 'props',
  };

  // 1 способ получить значение по ключу
  const a = style.color;

  // 2 способ
  const b = style['color'];

  // 3 способ
  const key = 'color';
  const c = style[key];

  console.log({
    a,
    b,
    c,
  });

  return (
    <div className={styles.container}>
      {colors.map((color) => (
        <div
          key={color}
          className={`${styles.colors_item} ${styles[color]}`}
        >
          {color}
        </div>
      ))}
    </div>
  );
};
