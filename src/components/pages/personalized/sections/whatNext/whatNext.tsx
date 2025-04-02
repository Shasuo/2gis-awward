import { SuccessTellCards } from "@/components/reused/successTellCards/successTellCards";
import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";

export const WhatNext = () => {
  return (
    <section>
      <div className={"flex items-start"}>
        <TextModule
          text={"Что дальше:"}
          font_weight={600}
          font_size={40}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
        />
        <TextModule
          margin_left={327}
          text={
            "Продолжайте рассказывать аудитории о своем успехе. Создавайте новые публикации, используя подготовленные материалы"
          }
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          max_width={420}
        />
      </div>
      <SuccessTellCards />
      <Link
        href={"/"}
        className={
          "hover:opacity-100 mt-6 py-4 px-6 box-border rounded-[8] bg-[#374463] opacity-70 block"
        }
      >
        <TextModule
          text={"На главную"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018"}
          text_centered
        />
      </Link>
    </section>
  );
};
