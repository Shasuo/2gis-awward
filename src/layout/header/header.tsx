import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";

export const Header = () => {
  return (
    <header
      className={
        "max-tablet:p-4 max-tablet:mt-0 max-tablet:max-w-[375px] max-w-[1128px] mx-auto flex items-start justify-between mt-[37px]"
      }
    >
      <Link href={"/"}>
        <Image
          src={`${ICONS_PATH}/2gis-header.png`}
          alt={"2GIS"}
          width={205}
          height={60}
          className={
            "max-tablet:w-[104px] max-tablet:h-[30] w-[205px] h-[60px]"
          }
        />
      </Link>
      <div
        className={"max-tablet:mt-0 flex items-center mt-[17px] cursor-pointer"}
      >
        <Image
          src={`${ICONS_PATH}/planet.svg`}
          alt={"language"}
          width={15}
          height={15}
        />
        <div className={"SB-Sans-text text-base] ml-1"}>RU</div>
        <Image
          className={"max-tablet:ml-[4px] ml-[10px]"}
          src={`${ICONS_PATH}/arrow.svg`}
          alt={"open"}
          width={11}
          height={7}
        />
      </div>
    </header>
  );
};
