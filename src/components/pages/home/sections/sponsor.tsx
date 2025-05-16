import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { ICONS_PATH } from "@/components/paths/paths";
import Link from "next/link";

export const Sponsor = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section
      className={
        "max-tablet:mt-[80px] max-tablet:bg-[#2A3655] max-tablet:block max-tablet:px-[15px] mt-[27px] box-border bg-[#0C132D] p-12 flex items-start justify-between rounded-[24px]"
      }
    >
      <div
        className={"max-tablet:mx-auto max-tablet:max-w-[301px] max-w-[530px]"}
      >
        <h3
          className={
            "max-tablet:leading-[100%] max-tablet:tracking-[0.01em] max-tablet:text-[30px] text-[54px] leading-[92%] tracking-[-0.02em] font-display"
          }
        >
          {language ? (
            <>
              В этом году Премия 2ГИС выходит при поддержке{" "}
              <span className={"text-[#AB844C]"}>YouTool</span>
            </>
          ) : (
            <>
              Биыл 2GIS Awards <span className={"text-[#AB844C]"}>YouTool</span>{" "}
              қолдауымен өтеді
            </>
          )}
        </h3>
        <p
          className={`max-tablet:text-[14px] max-tablet:mt-[10px] ${language ? "max-tablet:max-w-[285px]" : "max-tablet:max-w-[285px]"} max-w-[509px] text-base leading-6 tracking-[-0.018em] mt-12`}
        >
          {language ? (
            <>
              С 2ГИС строить бизнес проще — мы помогаем вам находить клиентов.
              А если строить нужно буквально — с этим справится наш партнёр.
              YouTool — сервис аренды инструмента и строительного оборудования
              без&nbsp;залога.
            </>
          ) : (
            <>
              2GIS-пен бизнес жүргізу оңайырақ — біз сізге клиенттерді табуға
              көмектесеміз. Ал егер құрылыс тура мағынасында керек болса — бұл
              іске серіктесіміз көмектеседі. YouTool — кепілсіз құралдар мен
              құрылыс жабдықтарын жалға беру сервисі.
            </>
          )}
        </p>
      </div>

      <div
        className={
          "max-tablet:bg-[#0C132D] max-tablet:p-6 max-tablet:mt-8 bg-[#252F4B] rounded-[24px] box-border p-12"
        }
      >
        <img
          alt={"YouTool"}
          src={`${ICONS_PATH}/YouTool.svg`}
          className={"max-tablet:w-[208px]"}
        />
        <div className={"max-tablet:mt-8 mt-[10px]"}>
          <h4
            className={
              "max-tablet:text-[18px] max-tablet:leading-6 max-tablet:tracking-[-0.018em] font-semibold text-[24px] font-display leading-[130%] tracking-[0.015em]"
            }
          >
            {language ? "от 500 000 р/мес." : "2,9 млн тг/ай табыс"}
          </h4>
          <p
            className={`max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em] ${language ? "max-w-[356px]" : "max-w-[333px]"} mt-[5px]`}
          >
            {language
              ? "франшиза YouTool возможность каждому предпринимателю зарабатывать на аренде инструмента"
              : "YouTool франшизасы — әрбір кәсіпкерге құрал-жабдықты жалға беру арқылы табыс табуға мүмкіндік."}
          </p>
          <Link
            className={
              "max-tablet:w-full max-tablet:h-[56px] max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] mt-6 w-[240px] h-[60px] rounded-[8px] flex items-center justify-center text-base leading-6 tracking-[-0.018em] active:text-[#0C132D] active:bg-white hover:bg-white hover:text-[#0C132D]"
            }
            style={{ border: "1px solid white" }}
            href={"https://youtool.info/"}
            target={"_blank"}
          >
            <div className={"mt-[-1px]"}>
              {language ? "Узнать больше" : "Кобірек білу"}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
