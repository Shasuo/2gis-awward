import { Control } from "@/components/pages/digital/sections/readyPicture/control/control";
import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { useState } from "react";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";

const whatAFileName = (fileUrl: string) => {
  switch (fileUrl) {
    case "PICTURE_EN":
      return "picture_EN_2gis_awards";
    case "PICTURE_KZ":
      return "picture_KZ_2gis_awards";
    case "PICTURE_RU":
      return "picture_RU_2gis_awards";
    case "VIDEO_EN":
      return "video_EN_2gis_awards";
    case "VIDEO_KZ":
      return "video_KZ_2gis_awards";
    case "VIDEO_RU":
      return "video_RU_2gis_awards";
    default:
      return "Победитель премии";
  }
};

export const ReadyPicture = () => {
  const language = useAtom(languageRuAtom)[0];
  const [activeLanguage, setActiveLanguage] = useState<"RU" | "EN">("RU");
  const [size, setSize] = useState<"PICTURE" | "VIDEO">("PICTURE");

  return (
    <section
      className={
        "max-tablet:block max-tablet:mt-[80] max-tablet:px-6 mt-[170] rounded-[32] box-border p-12 bg-[#233149] flex items-start justify-between relative"
      }
      id={"winner-card"}
    >
      <div>
        <h4 className={"text-base leading-6 tracking-[-0.018em]"}>
          {language ? "Открытка победителя" : "Жеңімпаздың ашықхаты"}
        </h4>
        <h2
          className={`max-tablet:mt-7 max-tablet:max-w-[315] max-tablet:text-[24px] max-tablet:leading-[130%] max-tablet:tracking-[-0.016em] max-w-[468] mt-6 font-semibold ${language ? "text-[40px]" : "text-[37px]"} leading-[48px] tracking-[-0.016em]`}
        >
          {language
            ? "Используйте готовую картинку или видео"
            : "Дайын суретті немесе видеоны пайдаланыңыз"}
        </h2>
        <Control
          setActiveLanguage={setActiveLanguage}
          setSize={setSize}
          activeLanguage={activeLanguage}
          size={size}
        />
      </div>
      <Image
        src={
          language
            ? `${IMAGES_PATH}/awardWinner_${activeLanguage}_${size}.webp`
            : `${IMAGES_PATH}/KZ_${size}.png`
        }
        alt={`Победитель премии! ${activeLanguage} ${size}`}
        width={size === "PICTURE" ? 374 : 319}
        height={size === "PICTURE" ? 468 : 569}
        className={"max-tablet:mx-auto max-tablet:mt-8"}
      />
      <div
        className={
          "max-tablet:block max-tablet:relative max-tablet:left-[unset] max-tablet:bottom-[unset] max-tablet:mt-8 flex gap-2 mt-[98] absolute bottom-12 left-12"
        }
      >
        <Link
          href={
            language
              ? `/download/${size}_${activeLanguage}.${size === "VIDEO" ? "mov" : "png"}`
              : `/download/${size}_KZ.${size === "VIDEO" ? "mov" : "png"}`
          }
          className={
            "max-tablet:justify-center max-tablet:h-[56] flex items-center py-3 px-4 bg-[#AB844C] rounded-[8] box-border"
          }
          download={whatAFileName(
            language ? `${size}_${activeLanguage}` : `${size}_KZ`,
          )}
          target={"_blank"}
          onClick={() => metrika("download_picture")}
        >
          <span
            className={
              "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em]"
            }
          >
            {language
              ? `Скачать ${size === "PICTURE" ? "картинку" : "видео"}`
              : "Бейне жүктеу"}
          </span>
          <Image
            src={`${ICONS_PATH}/download.svg`}
            alt={"Скачать картинку"}
            width={24}
            height={24}
            className={"ml-2"}
          />
        </Link>
        <Link
          href={"/materials"}
          className={
            "max-tablet:mt-1 max-tablet:flex max-tablet:justify-center max-tablet:h-[56] block py-3 px-7 bg-[#384761] rounded-[8] box-border"
          }
          onClick={() => metrika("more_layouts")}
        >
          <span
            className={
              "max-tablet:mt-[3] max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em]"
            }
          >
            {language ? "Больше макетов" : "Қосымша макеттер"}
          </span>
        </Link>
      </div>
    </section>
  );
};
