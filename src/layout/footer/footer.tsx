import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={"max-tablet:pt-[80] pt-[108]"}>
      <Link href={"/"} className={"block w-fit mx-auto"}>
        <Image
          src={`${ICONS_PATH}/2gis-header.png`}
          alt={"2GIS"}
          width={205}
          height={60}
          className={"max-tablet:w-[144] max-tablet:h-auto"}
        />
      </Link>
      <div
        className={
          "max-tablet:mt-10 max-tablet:block max-tablet:text-center mt-[58] flex justify-between items-end text-base leading-6 tracking-[-0.018em]"
        }
      >
        <div className={"max-tablet:hidden"}>
          ©2025, 2ГИС.
          <br />{" "}
          <Link
            target={"_blank"}
            href={"https://law.2gis.ru"}
            className={"underline hover:text-[#C5A87E] active:text-[#C5A87E]"}
          >
            Правовая информация
          </Link>
        </div>
        <div className={"max-tablet:hidden"}>awards@2gis.ru</div>
        <div className={"max-tablet:block flex gap-[28]"}>
          <Link
            href={"https://law.2gis.ru/2025-awards-rules"}
            className={"block hover:text-[#C5A87E] active:text-[#C5A87E]"}
            target={"_blank"}
          >
            Правила Премии
          </Link>
          <Link
            href={"https://awards.2gis.ru/business"}
            className={
              "block max-tablet:mt-6 hover:text-[#C5A87E] active:text-[#C5A87E]"
            }
            target={"_blank"}
          >
            Для бизнеса
          </Link>
        </div>
        <div
          className={
            "cursor-pointer max-tablet:mt-12 hover:text-[#C5A87E] active:text-[#C5A87E]"
          }
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Наверх ↑
        </div>
        <div className={"max-tablet:block hidden mt-12"}>
          <div className={"mt-6"}>awards@2gis.ru</div>
          <div className={"mt-6 opacity-70"}>
            ©2025, 2ГИС.{" "}
            <Link
              href={"https://law.2gis.ru"}
              className={"underline hover:text-[#C5A87E] active:text-[#C5A87E]"}
              target={"_blank"}
            >
              Правовая информация
            </Link>
          </div>
          <div className={"mt-6 flex gap-3 mx-auto w-fit"}>
            <div
              className={
                "cursor-pointer hover:text-[#C5A87E] active:text-[#C5A87E]"
              }
            >
              Русский
            </div>
            <div
              className={
                "opacity-70 cursor-pointer hover:text-[#C5A87E] active:text-[#C5A87E]"
              }
            >
              Қазақ
            </div>
          </div>
        </div>
      </div>
      <div className={"max-tablet:pt-[140] pt-12"}></div>
    </footer>
  );
};
