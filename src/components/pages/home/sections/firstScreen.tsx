import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const FirstScreen = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section
      className={
        "max-tablet:mx-auto max-tablet:max-w-[321] max-tablet:block max-tablet:mt-[50px] mt-[142px] flex items-start justify-between"
      }
    >
      <h1
        className={
          "max-tablet:max-w-[321] max-tablet:text-center max-tablet:text-[42px] max-tablet:leading-[92%] text-[65px] font-bold font-display leading-[110%] tracking-[-0.02em] max-w-[776px]"
        }
      >
        {language ? (
          <>
            Ура! Вы —{" "}
            <span className={"max-tablet:text-white text-[#C5A87E]"}>
              победитель
            </span>{" "}
            Премии 2ГИС 2025
          </>
        ) : (
          <>
            Алақай! Сіз — 2GIS&nbsp;Awards 2025{" "}
            <span className={"max-tablet:text-white text-[#C5A87E]"}>
              жеңімпазысыз
            </span>{" "}
          </>
        )}
      </h1>
      <div
        className={
          "max-tablet:mt-8 max-tablet:max-w-[309px] max-tablet:text-center max-w-[372px]"
        }
      >
        <p className={"text-base leading-[24px] tracking-[-0.018em]"}>
          {language ? (
            <>
              В 2ГИС позаботились о вас и&nbsp;подготовили набор материалов,
              чтобы вы с легкостью заявляли о своей победе!
            </>
          ) : (
            <>
              2GIS сіз туралы ойлап, сіздің өз жеңісіңіз туралы оңай
              жариялауыңыз үшін материалдар жинағын дайындады!
            </>
          )}
        </p>
        {/*
        <p className={"text-base leading-[24px] tracking-[-0.018em] mt-[25px]"}>
          Делитесь радостной новостью со своими клиентами, используя уже готовые
          материалы!
        </p>*/}
      </div>
    </section>
  );
};
