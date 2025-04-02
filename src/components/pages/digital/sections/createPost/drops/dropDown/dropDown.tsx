import { TextModule } from "@/components/texts/textModule";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { useState } from "react";
import { DropDownProps } from "@/components/pages/digital/sections/createPost/drops/drops";
export const DropDown = ({ content }: { content: DropDownProps }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`mt-[12] rounded-[16] p-6 box-border relative bg-[#233149] ${active ? "" : "cursor-pointer"}`}
      onClick={() => (!active ? setActive(true) : undefined)}
    >
      <div
        className={"absolute right-6 h-[23] cursor-pointer"}
        onClick={() => setActive(!active)}
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

      <TextModule
        text={content.title}
        as={"h4"}
        font_weight={600}
        font_size={24}
        line_height={"130%"}
        letter_spacing={"0.015em"}
        max_width={438}
      />
      {active && (
        <TextModule
          text={content.text}
          as={"p"}
          font_size={15}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          margin_top={16}
          max_width={415}
        />
      )}
    </div>
  );
};
