import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { ControlButton } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/controlButtons/controlButton";
import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai/index";
import {
  languageRuAtom,
  materialsDataAtom,
  materialSizesAtom,
} from "@/atoms/atoms";
import { MobileChoice } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/mobileChoice/mobileChoice";
import { useEffect, useState } from "react";
import { DownloadButton } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/downloadButton/downloadButton";
import { DownloadAll } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/downloadButton/downloadAll";

export const Materials = () => {
  const language = useAtom(languageRuAtom)[0];
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);
  const [activeImage, setActiveImage] = useState(
    `${IMAGES_PATH}/${activeMaterial.sizes.width}x${activeMaterial.sizes.height}.png`,
  );
  const materialsData = useAtom(materialsDataAtom)[0];

  useEffect(() => {
    if (materialsData) {
      const filePath = materialsData.find((item) => {
        const sizeMatch =
          item.width === activeMaterial.sizes.width &&
          item.height === activeMaterial.sizes.height;

        const typeMatch =
          activeMaterial.type === "IMAGE" ? !item.video : item.video;

        return sizeMatch && typeMatch;
      })?.link;

      if (filePath) {
        setActiveImage(filePath);
      }
    }
  }, [materialsData, activeMaterial]);

  return (
    <div
      className={
        "max-tablet:block max-tablet:mt-[24] max-tablet:pt-[48] max-tablet:ml-6 mt-[59] ml-[71] flex items-start"
      }
    >
      <MobileChoice />
      <div className={"max-tablet:mt-8 max-tablet:ml-0 ml-12 order-2"}>
        <h3
          className={
            "max-tablet:text-[24px] max-tablet:leading-[130%] text-white font-bold text-[32px] leading-10 tracking-[-0.016em]"
          }
        >
          {activeMaterial.type === "IMAGE"
            ? language
              ? "Картинка"
              : "Сурет"
            : language
              ? "Видео-открытка"
              : "Бейне ашықхат "}
          <br /> {activeMaterial.sizes.width}х{activeMaterial.sizes.height}
        </h3>
        <p
          className={"mt-4 max-w-[288] text-base leading-6 tracking-[-0.018em]"}
        >
          {language ? (
            <>
              {activeMaterial.type === "IMAGE" ? "Картинка" : "Видео"} подходит
              для большинства социальных сетей
            </>
          ) : (
            "Бейне көптеген әлеуметтік желілерде жариялауға қолайлы"
          )}
        </p>
        <div className={"max-tablet:mt-6 mt-9 flex gap-2"}>
          <DownloadButton
            activeMaterial={activeMaterial}
            activeImage={activeImage}
          />
          <div
            className={
              "cursor-pointer hover:bg-[#C5A87E] active:bg-[#C5A87E] max-tablet:w-[56] max-tablet:h-[56] w-12 h-12 bg-[#AB844C] rounded-[8px] flex items-center justify-center"
            }
          >
            <Image
              src={`${ICONS_PATH}/share.svg`}
              alt={"Поделиться"}
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div
        className={
          "max-tablet:mt-8 max-tablet:w-full max-tablet:max-w-[323] w-[264px] order-0"
        }
      >
        {activeMaterial.type === "IMAGE" ? (
          <img
            src={activeImage}
            alt={activeMaterial.sizes.width + "x" + activeMaterial.sizes.height}
            className={"max-tablet:w-full"}
          />
        ) : (
          <video
            src={activeImage}
            className={"max-tablet:w-full"}
            autoPlay
            muted
          />
        )}

        <div
          className={
            "max-tablet:mt-3 max-tablet:ml-auto max-tablet:mr-0 flex mt-6 w-fit mx-auto gap-3"
          }
        >
          <ControlButton
            left
            activeMaterial={activeMaterial}
            setActiveMaterial={setActiveMaterial}
          />
          <ControlButton
            activeMaterial={activeMaterial}
            setActiveMaterial={setActiveMaterial}
          />
        </div>
        <DownloadAll mobile />
      </div>
    </div>
  );
};
