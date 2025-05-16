import { SliderDownloadMaterials } from "@/components/reused/sliderDownloadMaterials/sliderDownloadMaterials";
import Link from "next/link";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const WhatNext = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section className={"max-tablet:mt-[80] mt-[196]"}>
      <div
        className={
          "max-tablet:ml-9 max-tablet:block max-tablet: flex items-start"
        }
      >
        <h2
          className={
            "max-tablet:text-[24px] max-tablet:leading-[130%] max-tablet:tracking-[-0.016em] font-semibold text-[40px] leading-[48px] tracking-[-0.016em]"
          }
        >
          {language ? "Что дальше:" : "Әрі қарай не істеу қажет:"}
        </h2>
        <p
          className={
            "max-tablet:mt-6 max-tablet:ml-0 max-tablet:max-w-[283] max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base tracking-[-0.018em] leading-[24px] ml-[321] max-w-[419]"
          }
        >
          {language
            ? "Станьте заметнее в городе, используя печатные стикеры в офлайне или просите пользователей оставлять еще больше отзывов!"
            : "Қалада көзге түсіңіз — офлайнда баспа стикерлерін қолданыңыз немесе пайдаланушылардан көбірек пікір қалдыруды сұраңыз!"}
        </p>
      </div>
      <div className={"mt-12"}>
        <SliderDownloadMaterials />
      </div>
      <Link
        href={"/"}
        className={
          "max-tablet:mt-2 max-tablet:mx-auto max-tablet:max-w-[344] max-tablet:py-[13px] active:opacity-100 hover:opacity-100 mt-6 py-4 px-6 box-border rounded-[8] bg-[#374463] opacity-70 block"
        }
      >
        <div
          className={
            "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em] text-center"
          }
        >
          {language ? "На главную" : "Басты бетке"}
        </div>
      </Link>
    </section>
  );
};
