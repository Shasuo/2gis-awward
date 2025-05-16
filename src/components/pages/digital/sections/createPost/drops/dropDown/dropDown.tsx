import { TextModule } from "@/components/texts/textModule";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { useState } from "react";
import { DropDownProps } from "@/components/pages/digital/sections/createPost/drops/drops";
import { metrika } from "@/components/scripts/metrika";
export const DropDown = ({ content }: { content: DropDownProps }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`mt-[12] rounded-[16] p-6 box-border relative bg-[#233149] ${active ? "" : "cursor-pointer"}`}
      onClick={() => {
        setActive(!active);
        metrika("create_post");
      }}
    >
      <div
        className={"absolute right-6 h-[23] cursor-pointer"}
        style={{ top: active ? 31 : 21 }}
      >
        <Image
          src={`${ICONS_PATH}/${active ? "minus.svg" : "plus.svg"}`}
          alt={""}
          width={23}
          height={2}
          className={"mt-[10] select-none h-auto"}
        />
      </div>
      <h4
        className={
          "max-tablet:max-w-[247] max-tablet:text-[18px] max-tablet:leading-6 max-tablet:tracking-[-0.018em] font-semibold text-[24px] leading-[130%] tracking-[0.015em] max-w-[434]"
        }
      >
        {content.title}
      </h4>

      {active && (
        <p
          className={
            "max-tablet:max-w-[291] max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-[15px] leading-6 tracking-[-0.018em] mt-4 max-w-[434] opacity-80"
          }
        >
          {content.text}
        </p>
      )}
    </div>
  );
};
