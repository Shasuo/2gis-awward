import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { mainMaterialInterface } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";
import { useState } from "react";
import { handleDownload } from "@/components/scripts/handleDownload";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";

export const DownloadButton = ({
  activeMaterial,
  activeImage,
}: {
  activeMaterial: mainMaterialInterface;
  activeImage: string;
}) => {
  const language = useAtom(languageRuAtom)[0];
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div
      onClick={() => {
        handleDownload(activeImage, setIsLoading, activeMaterial);
        metrika("download_of_victory");
      }}
      className={
        "hover:bg-[#666D7D] active:bg-[#666D7D] cursor-pointer max-tablet:w-full max-tablet:max-w-[257] max-tablet:text-[14px] max-tablet:h-[56] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] h-12 flex items-center justify-center px-4 gap-2 text-base leading-6 tracking-[-0.018em] rounded-[8px] bg-[#313F5B]"
      }
    >
      {isLoading ? (
        <div className={"w-[140] flex"}>
          <div
            className={"preloader mx-auto"}
            style={{ width: 20, height: 20 }}
          ></div>
        </div>
      ) : (
        <>
          {language
            ? `Скачать ${activeMaterial.type === "IMAGE" ? "картинку" : "видео"}`
            : "Жүктеп алу бейне"}
          <Image
            src={`${ICONS_PATH}/download.svg`}
            alt={"Скачать картинку"}
            width={20}
            height={20}
          />
        </>
      )}
    </div>
  );
};
