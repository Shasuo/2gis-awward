import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={"pt-[108]"}>
      <Link href={"/"} className={"block w-fit mx-auto"}>
        <Image
          src={`${ICONS_PATH}/2gis-header.png`}
          alt={"2GIS"}
          width={205}
          height={60}
        />
      </Link>
      <div
        className={
          "mt-[58] flex justify-between items-end text-base leading-6 tracking-[-0.018em]"
        }
      >
        <div>
          ©2025, 2ГИС.
          <br /> Правовая информация
        </div>
        <div>awards@2gis.ru</div>
        <div className={"flex gap-[28]"}>
          <Link href={"#"} className={"block"}>
            Правила Премии
          </Link>
          <Link href={"#"} className={"block"}>
            Правила Премии
          </Link>
        </div>
        <div
          className={"cursor-pointer"}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Наверх ↑
        </div>
      </div>
      <div className={"pt-12"}></div>
    </footer>
  );
};
