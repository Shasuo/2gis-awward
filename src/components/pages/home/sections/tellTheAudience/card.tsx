import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import Image from "next/image";
import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import { CardProps } from "@/components/pages/home/sections/tellTheAudience/cards";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";

export const Card = ({
  href,
  img,
  text,
  mobilePlusHeight,
  blank,
  metrikaName,
}: CardProps) => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <Link
      href={href}
      className={`${mobilePlusHeight ? "max-tablet:h-[345]" : "max-tablet:h-[286]"} max-tablet:p-[24] max-tablet:w-full p-[36] box-border w-[360] h-[408]  rounded-[16] flex arrowImageBlock_HOVER`}
      style={{
        flexDirection: "column",
        backgroundImage: `url(${IMAGES_PATH}/${img})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      target={blank ? "_blank" : undefined}
      onClick={() => metrika(metrikaName)}
    >
      <div className={"flex"}>
        <div
          className={
            "max-tablet:rounded-[8] max-tablet:w-[24] max-tablet:h-[24] w-10 h-10 flex items-center justify-center rounded-[12px] box-border arrowImageBlock"
          }
          style={{ border: "1px solid white" }}
        >
          <img
            src={`${ICONS_PATH}/link_arrow.svg`}
            alt={"Перейти"}
            className={"max-tablet:w-2 max-tablet:h-2"}
          />
        </div>
        <div
          className={
            "max-tablet:rounded-[8] max-tablet:h-6 max-tablet:py-1 max-tablet:px-2 max-tablet:ml-1 rounded-[12] box-border h-10 px-[15] py-2 ml-[10]"
          }
          style={{ border: "1px solid white" }}
        >
          <div
            className={
              "max-tablet:mt-[.4px] max-tablet:leading-[110%] max-tablet:text-[12px] text-base leading-6 tracking-[-0.018em] mt-[-1]"
            }
          >
            {language ? <>Соц.сети</> : <>Әлеуметтік желілер</>}
          </div>
        </div>
      </div>
      <h4
        className={
          "max-tablet:text-[18px] max-tablet:tracking-[-0.018em] max-tablet:leading-[24px] text-[24px] leading-[130%] tracking-[-0.015em] font-display mt-auto"
        }
      >
        {text}
      </h4>
    </Link>
  );
};
