import { SuccessTellCards } from "@/components/reused/successTellCards/successTellCards";
import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";

export const WhatNext = () => {
  return (
    <section>
      <div className={"max-tablet:ml-9 max-tablet:block flex items-start"}>
        <h3
          className={
            "max-tablet:leading-[130%] max-tablet:text-[24px] font-semibold text-[40px] leading-[48px] tracking-[-0.016em]"
          }
        >
          Что дальше:
        </h3>
        <p
          className={
            "max-tablet:max-w-[282] max-tablet:ml-0 max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] max-tablet:mt-6 ml-[327] text-base leading-6 tracking-[-0.018em] max-w-[420px]"
          }
        >
          Продолжайте рассказывать аудитории о&nbsp;своем успехе. Создавайте
          новые публикации, используя подготовленные материалы
        </p>
      </div>
      <SuccessTellCards />
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
          На главную
        </div>
      </Link>
    </section>
  );
};
