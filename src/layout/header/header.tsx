import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";

export const Header = () => {
  return (
    <header
      className={
        "w-[1128px] mx-auto flex items-start justify-between mt-[37px]"
      }
    >
      <Link href={"/"}>
        <Image
          src={`${ICONS_PATH}/2gis-header.png`}
          alt={"2GIS"}
          width={205}
          height={60}
        />
      </Link>
      <div className={"flex items-center mt-[17px] cursor-pointer"}>
        <Image
          src={`${ICONS_PATH}/planet.svg`}
          alt={"language"}
          width={15}
          height={15}
        />
        <div className={"SB-Sans-text text-base] ml-1"}>RU</div>
        <Image
          className={"ml-[10px]"}
          src={`${ICONS_PATH}/arrow.svg`}
          alt={"open"}
          width={11}
          height={7}
        />
      </div>
    </header>
  );
};
