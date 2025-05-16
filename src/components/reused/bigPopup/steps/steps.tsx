import styles from "./step.module.css";

export const Steps = () => {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.item_dark}>
          <div className={styles.step_number}>Шаг 1</div>
          <div>
            <h3 className={styles.step1_name}>Открываем картинку</h3>
            <p className={styles.step1_text}>
              Заходим в любой удобный редактор (Canva, Figma или даже мобильное
              приложение Bazaart/Snapseed) и&nbsp;загружаем фото.
            </p>
          </div>
        </div>
        <div className={styles.item_light}>
          <div className={styles.step_number}>Шаг 2</div>
          <div>
            <h3 className={styles.step2_name}>
              Добавляем
              <br />
              диджитал-шильдик
            </h3>
            <p className={styles.step2_text}>
              Вставляем файл поверх вашего изображения.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.item_light}>
          <div className={styles.step_number}>Шаг 3</div>
          <div>
            <h3 className={styles.step3_name}>
              Перемещаем и&nbsp;настраиваем размер
            </h3>
            <p className={styles.step3_text}>
              Двигаем шильдик в нужное место и&nbsp;увеличиваем/уменьшаем, если
              это необходимо.
            </p>
          </div>
        </div>
        <div className={styles.item_dark}>
          <div className={styles.step_number}>Шаг 4</div>
          <div>
            <h3 className={styles.step4_name}>Сохраняем готовый результат</h3>
            <p className={styles.step4_text}>
              Нажимаем «Сохранить» или «Экспорт» и получаем картинку с
              шильдиком, готовую к публикации.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.finish}>
        <p className={styles.finish_text}>
          Или можете просто отдать эти макеты вашему дизайнеру. Он точно знает,
          что с ними делать 😉
        </p>
      </div>
    </section>
  );
};
