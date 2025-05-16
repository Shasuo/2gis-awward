import { useAtom } from "jotai/index";
import { languageRuAtom, materialsDataAtom } from "@/atoms/atoms";
import { useState } from "react";
import { handleDownload } from "@/components/scripts/handleDownload";
import { metrika } from "@/components/scripts/metrika";

export const DownloadAll = ({ mobile }: { mobile?: boolean }) => {
  const language = useAtom(languageRuAtom)[0];
  const materialsData = useAtom(materialsDataAtom)[0];
  const [isLoading, setIsLoading] = useState(false);

  const downloadArchive = () => {
    const path = materialsData.find((item) => item.archive)?.link;
    if (path) handleDownload(path, setIsLoading);
  };
  if (mobile) {
    return (
      <div
        className={
          "text-center hover:bg-[#C5A87E] active:bg-[#C5A87E] cursor-pointer max-tablet:flex rounded-[8px] bg-[#AB844C] px-10 items-center h-[56] mt-12 text-[14px] leading-[150%] tracking-[-0.01em] w-full hidden justify-center"
        }
        onClick={() => {
          downloadArchive();
          metrika("download_all_materials");
        }}
      >
        {isLoading ? (
          <div className={"w-[180] flex"}>
            <div
              className={"preloader mx-auto"}
              style={{ width: 20, height: 20 }}
            ></div>
          </div>
        ) : language ? (
          "Скачать все материалы"
        ) : (
          "Жүктеп алу все материалы"
        )}
      </div>
    );
  } else {
    return (
      <div
        className={
          "text-center hover:bg-[#C5A87E] active:bg-[#C5A87E] max-tablet:max-w-[unset] cursor-pointer rounded-[8px] bg-[#AB844C] px-10 flex items-center py-3 text-base leading-6 tracking-[-0.018em] absolute bottom-12 left-12 max-w-[300]"
        }
        onClick={() => {
          downloadArchive();
          metrika("download_all_materials");
        }}
      >
        {isLoading ? (
          <div className={"w-[180] flex"}>
            <div
              className={"preloader mx-auto"}
              style={{ width: 20, height: 20 }}
            ></div>
          </div>
        ) : language ? (
          "Скачать все материалы"
        ) : (
          "Барлық материалдарды  жүктеп алу"
        )}
      </div>
    );
  }
};
