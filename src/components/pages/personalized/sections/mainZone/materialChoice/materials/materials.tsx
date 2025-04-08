import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { ControlButton } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/controlButtons/controlButton";
import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai/index";
import { materialSizesAtom } from "@/atoms/atoms";
import { MobileChoice } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/mobileChoice/mobileChoice";

export const Materials = () => {
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);
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
          {activeMaterial.type === "IMAGE" ? "Картинка" : "Видео-открытка"}
          <br /> {activeMaterial.sizes.width}х{activeMaterial.sizes.height}
        </h3>
        <p
          className={"mt-4 max-w-[288] text-base leading-6 tracking-[-0.018em]"}
        >
          {activeMaterial.type === "IMAGE" ? "Картинка" : "Видео"} подходит для
          большинства социальных сетей
        </p>
        <div className={"max-tablet:mt-6 mt-9 flex gap-2"}>
          <Link
            href={"#"}
            className={
              "max-tablet:w-full max-tablet:max-w-[257] max-tablet:text-[14px] max-tablet:h-[56] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] h-12 flex items-center justify-center px-4 gap-2 text-base leading-6 tracking-[-0.018em] rounded-[8px] bg-[#313F5B]"
            }
          >
            Скачать картинку{" "}
            <Image
              src={`${ICONS_PATH}/download.svg`}
              alt={"Скачать картинку"}
              width={20}
              height={20}
            />
          </Link>
          <div
            className={
              "max-tablet:w-[56] max-tablet:h-[56] w-12 h-12 bg-[#AB844C] rounded-[8px] flex items-center justify-center"
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
        <img
          src={`${IMAGES_PATH}/${activeMaterial.sizes.width}x${activeMaterial.sizes.height}.png`}
          alt={activeMaterial.sizes.width + "x" + activeMaterial.sizes.height}
          className={"max-tablet:w-full"}
        />
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
        <Link
          href={"#"}
          className={
            "max-tablet:flex rounded-[8px] bg-[#AB844C] px-10 items-center h-[56] mt-12 text-[14px] leading-[150%] tracking-[-0.01em] w-full hidden justify-center"
          }
        >
          Скачать все материалы
        </Link>
      </div>
    </div>
  );
};
