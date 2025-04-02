import { TextModule } from "@/components/texts/textModule";
import { SliderDownloadMaterials } from "@/components/reused/sliderDownloadMaterials/sliderDownloadMaterials";
import Link from "next/link";

export const WhatNext = () => {
  return (
    <section className={"mt-[196]"}>
      <div className={"flex items-start"}>
        <TextModule
          text={"Что дальше:"}
          font_weight={600}
          font_size={40}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
          as={"h2"}
        />
        <TextModule
          text={
            "Станьте заметнее в городе, используя печатные стикеры в офлайне или просите пользователей оставлять еще больше отзывов!"
          }
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"p"}
          margin_left={321}
          max_width={419}
        />
      </div>
      <div className={"mt-12"}>
        <SliderDownloadMaterials />
      </div>
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
