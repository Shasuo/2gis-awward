import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const FirstScreen = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section
      className={"max-tablet:ml-9 max-tablet:block mt-8 flex items-start"}
    >
      <h1
        className={
          "max-tablet:max-w-[321] max-tablet:text-[30px] max-tablet:leading-[100%] max-tablet:tracking-[0.01em] max-w-[639] font-display text-[54px] leading-[92%] tracking-[-0.02em]"
        }
      >
        {language
          ? "Продолжайте рассказывать аудитории о своем успехе"
          : "Аудиториямен өз жетістігіңіз туралы ақпаратпен бөлісуді жалғастырыңыз."}
      </h1>
      <p
        className={
          "max-tablet:ml-0 max-tablet:mt-8 max-tablet:max-w-[309] ml-[128px] max-w-[324] text-base leading-6 tracking-[-0.018em]"
        }
      >
        {language ? (
          <>
            Мы подготовили всё, чтобы вы без особых затрат рассказали о своей
            победе — используйте готовые идеи.
          </>
        ) : (
          "Біз жеңісіңіз туралы қосымша шығынсыз айтуыңыз үшін бәрін дайындадық — дайын идеяларды пайдаланыңыз."
        )}
      </p>
    </section>
  );
};
