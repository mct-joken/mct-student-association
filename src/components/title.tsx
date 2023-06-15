import styles from '../css/title.module.css';

export const Title = (props: { title: string }) => {
  return (
    <div className={styles.title}>
      <h2 className={styles['title-text']}>{props.title}</h2>
    </div>
  );
};
