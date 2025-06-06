import { useAtom } from "jotai";
import styles from "./firstScreen.module.css";
import { languageRuAtom } from "@/atoms/atoms";
export const FirstScreen = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section>
      <div className={styles.instruction}>
        {language ? "Инструкция" : "Нұсқаулық"}
      </div>
      <h2
        className={language ? styles.header : styles.headerKZ + ' ' + styles.header}
      >
        {language ? "Как добавить диджитал-шильдик на картинку" : `Суретке диджитал-шильдті қалай қосуға болады`}
      </h2>
    </section>
  );
};
