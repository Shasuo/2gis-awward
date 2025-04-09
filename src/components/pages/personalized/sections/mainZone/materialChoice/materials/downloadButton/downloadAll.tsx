import { useAtom } from "jotai/index";
import { materialsDataAtom } from "@/atoms/atoms";
import { useState } from "react";
import { handleDownload } from "@/components/scripts/handleDownload";

export const DownloadAll = ({ mobile }: { mobile?: boolean }) => {
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
          "hover:bg-[#C5A87E] active:bg-[#C5A87E] cursor-pointer max-tablet:flex rounded-[8px] bg-[#AB844C] px-10 items-center h-[56] mt-12 text-[14px] leading-[150%] tracking-[-0.01em] w-full hidden justify-center"
        }
        onClick={downloadArchive}
      >
        {isLoading ? (
          <div className={"w-[180] flex"}>
            <div
              className={"preloader mx-auto"}
              style={{ width: 20, height: 20 }}
            ></div>
          </div>
        ) : (
          "Скачать все материалы"
        )}
      </div>
    );
  } else {
    return (
      <div
        className={
          "hover:bg-[#C5A87E] active:bg-[#C5A87E] cursor-pointer rounded-[8px] bg-[#AB844C] px-10 flex items-center h-12 text-base leading-6 tracking-[-0.018em] absolute bottom-12 left-12"
        }
        onClick={downloadArchive}
      >
        {isLoading ? (
          <div className={"w-[180] flex"}>
            <div
              className={"preloader mx-auto"}
              style={{ width: 20, height: 20 }}
            ></div>
          </div>
        ) : (
          "Скачать все материалы"
        )}
      </div>
    );
  }
};
