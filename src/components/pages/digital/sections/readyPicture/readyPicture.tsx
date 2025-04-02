import { TextModule } from "@/components/texts/textModule";
import { Control } from "@/components/pages/digital/sections/readyPicture/control/control";
import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { useState } from "react";

export const ReadyPicture = () => {
  const [activeLanguage, setActiveLanguage] = useState<"RU" | "EN">("RU");
  const [size, setSize] = useState<"PICTURE" | "VIDEO">("PICTURE");
  return (
    <section
      className={
        "mt-[170] rounded-[32] box-border p-12 bg-[#233149] flex items-start justify-between relative"
      }
    >
      <div>
        <TextModule
          text={"Открытка победителя"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"h4"}
        />
        <TextModule
          text={"Используйте готовую картинку"}
          as={"h2"}
          max_width={468}
          margin_top={24}
          font_weight={600}
          font_size={40}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
        />
        <Control
          setActiveLanguage={setActiveLanguage}
          setSize={setSize}
          activeLanguage={activeLanguage}
          size={size}
        />
        <div className={"flex gap-2 mt-[98] absolute bottom-12 left-12"}>
          <Link
            href={"#"}
            className={
              "flex items-center py-3 px-4 bg-[#AB844C] rounded-[8] box-border"
            }
          >
            <TextModule
              text={"Скачать картинку"}
              font_size={16}
              line_height={"24px"}
              letter_spacing={"-0.018em"}
              as={"span"}
            />
            <Image
              src={`${ICONS_PATH}/download.svg`}
              alt={"Скачать картинку"}
              width={24}
              height={24}
              className={"ml-2"}
            />
          </Link>
          <Link
            href={"#"}
            className={"block py-3 px-7 bg-[#384761] rounded-[8] box-border"}
          >
            <TextModule
              text={"Больше макетов"}
              font_size={16}
              line_height={"24px"}
              letter_spacing={"-0.018em"}
              as={"span"}
            />
          </Link>
        </div>
      </div>
      <Image
        src={`${IMAGES_PATH}/awardWinner_${activeLanguage}_${size}.webp`}
        alt={`Победитель премии! ${activeLanguage} ${size}`}
        width={size === "PICTURE" ? 374 : 319}
        height={size === "PICTURE" ? 468 : 569}
      />
    </section>
  );
};
