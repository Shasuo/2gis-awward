import { useAtom } from "jotai";
import styles from "./step.module.css";
import { languageRuAtom } from "@/atoms/atoms";

export const Steps = () => {
  const language = useAtom(languageRuAtom)[0];

  const steps = [
    { 
      style_dark: true,
      number: `${language ? "Шаг 1" : "1-қадам"}`,
      name: `${language ? "Открываем картинку" : "Суретті ашамыз"}`,
      text: `${language ? "Заходим в любой удобный редактор (Canva, Figma или даже мобильное приложение Bazaart/Snapseed) и\xa0загружаем фото." : "Кез келген ыңғайлы редакторға (Canva, Figma немесе тіпті Bazaart/ Snapseed мобильді қосымшасына) кіріп, фотосуретті жүктейміз."}`
    },
    {
      style_dark: false,
      number: `${language ? "Шаг 2" : "2-қадам"}`,
      name: `${language ? "Добавляем<br/>диджитал-шильдик" : "Диджитал-шильдті<br/>қосамыз"}`,
      text: `${language ? "Вставляем файл поверх вашего изображения." : "Файлды суретіңіздің үстіне қоямыз."}`
    },
    { 
      style_dark: false,
      number: `${language ? "Шаг 3" : "3-қадам"}`,
      name: `${language ? "Перемещаем и\xa0настраиваем размер" : "Жылжытып, өлшемін баптаймыз"}`,
      text: `${language ? "Двигаем шильдик в нужное место и\xa0увеличиваем/уменьшаем, если это необходимо." : "Шильдті қажетті жерге жылжытып, қажет болған жағдайда үлкейтеміз/кішірейтеміз."}`
    },
    {
      style_dark: true,
      number: `${language ? "Шаг 4" : "4-қадам"}`,
      name: `${language ? "Сохраняем готовый результат" : "Дайын нәтижені сақтаймыз"}`,
      text: `${language ? "Нажимаем «Сохранить» или\xa0«Экспорт» и получаем картинку с\xa0шильдиком, готовую к публикации." : "«Сақтау» немесе «Экспорттау» батырмасын басып, жариялауға дайын шильді бар суретті аламыз."}`
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
          {language ? "Или можете просто отдать эти макеты вашему дизайнеру. Он точно знает,что с ними делать 😉" : "Немесе сіз ұсынылған макеттерді дизайнерге бере аласыз. Ол олармен не істеу керектігін жақсы біледі 😉"}
        </p>
      </div>
    </section>
  );
};
