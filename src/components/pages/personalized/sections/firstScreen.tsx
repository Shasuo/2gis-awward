import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const FirstScreen = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={
        "max-tablet:block max-tablet:ml-9 flex items-start mt-[34] font-display"
      }
    >
      <h1
        className={
          "max-tablet:max-w-[313px] max-tablet:text-[30px] max-tablet:leading-[100%] max-tablet:tracking-[0.01em] max-w-[612px] text-[54px] leading-[92%] tracking-[-0.02em]"
        }
      >
        {language
          ? "Расскажите о своей победе прямо сейчас"
          : "Жеңісіңіз туралы ақпаратпен дәл қазір бөлісіңіз"}
      </h1>
      <p
        className={
          "max-tablet:ml-0 max-tablet:mt-8 max-tablet:max-w-[309px] max-w-[324px] text-base leading-6 tracking-[-0.018em] ml-[155px]"
        }
      >
        {language ? (
          <>Мы подготовили набор текстовых и&nbsp;визуальных инструментов.</>
        ) : (
          "Біз мәтіндік және визуал құралдардың жиынтығын дайындадық."
        )}
      </p>
    </div>
  );
};
