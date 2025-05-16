import { Texts } from "@/components/pages/personalized/sections/readyMadeTexts/texts/texts";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const ReadyMadeTexts = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section
      className={
        "max-tablet:block max-tablet:mt-[80px] mt-[130] flex items-start justify-between"
      }
    >
      <div className={"max-tablet:ml-[36px]"}>
        <h3
          className={
            "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em]"
          }
        >
          {language ? "Готовые тексты" : "Дайын мәтіндер"}
        </h3>
        <h2
          className={
            "max-tablet:text-[24px] max-tablet:leading-[130%] max-w-[468px] text-[40px] font-semibold leading-[48px] tracking-[-0.016em] mt-7"
          }
        >
          {language ? (
            <>
              Используйте{" "}
              <span style={{ color: "#C5A87E" }}>готовые тексты</span>, чтобы
              быстро оформить пост
            </>
          ) : (
            "Постты тез құру үшін дайын мәтіндерді пайдаланыңыз"
          )}
        </h2>
      </div>
      <Texts />
    </section>
  );
};
