import styles from "./step.module.css";

export const Steps = () => {
  const steps = [
    { 
      style_dark: true,
      number: "Шаг 1",
      name: "Открываем картинку",
      text: "Заходим в любой удобный редактор (Canva, Figma или даже мобильное приложение Bazaart/Snapseed) и\xa0загружаем фото."
    },
    {
      style_dark: false,
      number: "Шаг 2",
      name: "Добавляем<br/>диджитал-шильдик",
      text: "Вставляем файл поверх вашего изображения."
    },
    { 
      style_dark: false,
      number: "Шаг 3",
      name: "Перемещаем и\xa0настраиваем размер",
      text: "Двигаем шильдик в нужное место и\xa0увеличиваем/уменьшаем, если это необходимо."
    },
    {
      style_dark: true,
      number: "Шаг 4",
      name: "Сохраняем готовый результат",
      text: "Нажимаем «Сохранить» или\xa0«Экспорт» и получаем картинку с\xa0шильдиком, готовую к публикации."
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.step_container}>
    {
      
      steps.map((step, index) => (
        
          <div key={index} className={step.style_dark ? styles.item_dark + ' '+ styles.item: styles.item_light + ' ' + styles.item}>
            <div  className={styles.step_number}>{step.number}</div>
              <div>
                <h3 className={styles.step_name} dangerouslySetInnerHTML={{__html:step.name}}/>
                <p className={styles.step_text}>{step.text}</p>
              </div>
            </div>
          
      ))
    }
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
