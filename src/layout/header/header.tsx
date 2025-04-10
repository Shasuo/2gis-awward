import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { useAtom } from "jotai";
import { languageRuAtom } from "@/atoms/atoms";
import React, { useRef, useState } from "react";
import useClickOutside from "@/components/scripts/useClickOutside";
export const Header = () => {
  const [language, setLanguage] = useAtom(languageRuAtom);
  const [active, setActive] = useState(false);

  const setLanguageHandle = () => {
    setLanguage(!language);
    setActive(false);
  };

  //@ts-ignore
  const dropdownRef = useRef<HTMLDivElement>(null);
  //@ts-ignore
  useClickOutside(dropdownRef, () => setActive(false));

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
      <div className={"relative"} ref={dropdownRef}>
        <div
          className={
            "max-tablet:mt-0 flex items-center mt-[17px] cursor-pointer"
          }
          onClick={() => setActive(!active)}
        >
          <Image
            src={`${ICONS_PATH}/planet.svg`}
            alt={"language"}
            width={15}
            height={15}
          />
          <div className={"SB-Sans-text text-base ml-1"}>
            {language ? "RU" : "KZ"}
          </div>
          <Image
            className={"max-tablet:ml-[4px] ml-[10px]"}
            src={`${ICONS_PATH}/arrow.svg`}
            alt={"open"}
            width={11}
            height={7}
            style={{ transform: active ? "rotate(180deg)" : undefined }}
          />
        </div>
        <div
          style={{ display: active ? "block" : "none" }}
          className={
            "hover:bg-[#121C39] active:bg-[#121C39] hover:text-white active:text-white cursor-pointer max-tablet:left-[16px] max-tablet:p-1 max-tablet:top-[25px] absolute bg-white p-2 left-[13px] top-[45px] text-black text-base rounded-[8px] z-10"
          }
          onClick={setLanguageHandle}
        >
          {language ? "KZ" : "RU"}
        </div>
      </div>
    </header>
  );
};
