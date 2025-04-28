import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { TextModule } from "@/components/texts/textModule";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";
/*"rgba(55, 68, 99, 0.7)"*/
export const DownloadButtons = () => {
  const language = useAtom(languageRuAtom)[0];

  return (
    <div
      className={
        "max-tablet:mt-[132px] max-tablet:left-[unset] max-tablet:bottom-[unset] max-tablet:block max-tablet:relative flex absolute bottom-9 left-9"
      }
    >
      <Link
        href={"/download/stickers_print_RU_2gis_awards.zip"}
        className={
          "bg-[#374463B2] hover:bg-[#666D7D] active:bg-[#666D7D] max-tablet:justify-center flex items-center box-border py-3 px-6 rounded-[8]"
        }
        download
        onClick={() => metrika("download_stickers")}
      >
        <Image
          src={`${ICONS_PATH}/download.svg`}
          alt={"Скачать РУ"}
          width={24}
          height={24}
          className={"block"}
        />
        <div
          className={
            "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em] ml-3"
          }
        >
          {language ? <>Скачать РУ</> : <>Жүктеп алу RU</>}
        </div>
      </Link>
      <Link
        href={"/download/stickers_print_EN_2gis_awards.zip"}
        className={
          "bg-[#374463B2] hover:bg-[#666D7D] active:bg-[#666D7D] max-tablet:justify-center max-tablet:mt-1 max-tablet:ml-0 flex items-center box-border py-3 px-6 rounded-[8] ml-3"
        }
        download
        onClick={() => metrika("download_stickers")}
      >
        <Image
          src={`${ICONS_PATH}/download.svg`}
          alt={"Скачать EN"}
          width={24}
          height={24}
          className={"block"}
        />
        <div
          className={
            "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em] ml-3"
          }
        >
          {language ? <>Скачать EN</> : <>Жүктеп алу EN</>}
        </div>
      </Link>
    </div>
  );
};
