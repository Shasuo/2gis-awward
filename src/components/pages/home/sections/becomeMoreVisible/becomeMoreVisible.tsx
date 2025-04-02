import { TextModule } from "@/components/texts/textModule";
import { Card } from "@/components/pages/home/sections/tellTheAudience/card";
import { DownloadButtons } from "@/components/pages/home/sections/becomeMoreVisible/downloadButtons";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import Image from "next/image";
import Link from "next/link";
import { SliderDownloadMaterials } from "@/components/reused/sliderDownloadMaterials/sliderDownloadMaterials";

export const BecomeMoreVisible = () => {
  return (
    <section className={"mt-[92]"}>
      <div
        className={"bg-white px-[15] py-2 rounded-[12px] w-fit text-[#0C132D]"}
      >
        <TextModule
          text={"Шаг 3"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
        />
      </div>
      <TextModule
        text={"Станьте заметнее в городе"}
        font_size={54}
        line_height={"92%"}
        letter_spacing={"-0.02em"}
        display
        as={"h2"}
        margin_top={36}
      />
      <SliderDownloadMaterials />

      <Link
        href={"#"}
        className={
          "mt-[27] rounded-[16] p-12 pb-[101] box-border bg-[#364464] relative overflow-hidden block"
        }
      >
        <TextModule
          text={"Чат-бот"}
          font_size={54}
          line_height={"92%"}
          letter_spacing={"-0.02em"}
          display
          as={"h3"}
        />
        <TextModule
          text={
            "Скачивайте материалы в несколько кликов через бота в телеграмм"
          }
          max_width={492}
          font_size={24}
          line_height={"130%"}
          letter_spacing={"-0.015em"}
          display
          as={"p"}
          margin_top={24}
        />
        <Image
          src={`${ICONS_PATH}/link.svg`}
          alt={"перейти"}
          width={40}
          height={40}
          className={"absolute right-12 top-12"}
        />
        <Image
          src={`${IMAGES_PATH}/bigTG.png`}
          alt={"перейти"}
          width={360}
          height={276}
          className={"absolute right-[105] bottom-0"}
        />
      </Link>
    </section>
  );
};
