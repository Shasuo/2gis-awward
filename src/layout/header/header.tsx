import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { useAtom } from "jotai";
import { languageRuAtom, materialSizesAtom } from "@/atoms/atoms";
import React, { useRef, useState } from "react";
import useClickOutside from "@/components/scripts/useClickOutside";
export const Header = () => {
  const [language, setLanguage] = useAtom(languageRuAtom);
  const [active, setActive] = useState(false);
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);

  const setLanguageHandle = () => {
    const lang = !language;
    setLanguage(lang);
    setActive(false);
    setActiveMaterial({ ...activeMaterial, ru: lang });
    localStorage.setItem("language_storage", lang ? "RU" : "KZ");
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
          src={`${ICONS_PATH}/${language ? "2gis-header.png" : "2gis-header_KZ.svg"}`}
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
          onClick={() => {
            setActive(!active);
          }}
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
          style={{ display: active ? "flex" : "none" }}
          className={
            "hover:bg-[#121C39] active:bg-[#121C39] hover:text-white active:text-white cursor-pointer max-tablet:w-[55] max-tablet:h-[55] max-tablet:left-[0] max-tablet:top-[25px] absolute bg-white left-[-7] top-[45px] text-black text-base rounded-[8px] z-10 w-[75] h-[75] flex items-center justify-center box-border"
          }
          onClick={setLanguageHandle}
        >
          {language ? "KZ" : "RU"}
        </div>
      </div>
    </header>
  );
};
