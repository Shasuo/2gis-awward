import styles from "./firstScreen.module.css";
export const FirstScreen = () => {
  return (
    <section>
      <div className={styles.instruction}>
        Инструкция
      </div>
      <h2
        className={styles.header}
      >
        Как добавить диджитал-шильдик на картинку 
      </h2>
    </section>
  );
};
