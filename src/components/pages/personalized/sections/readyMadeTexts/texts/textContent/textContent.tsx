import { TextContentProps } from "../texts";
import { TextModule } from "@/components/texts/textModule";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { Dispatch, useState } from "react";

export const useHandleCopy = (text: string, setState: Dispatch<any>) => {
  navigator.clipboard.writeText(text.trim()).then(() => {
    setState(true);
    setTimeout(() => setState(false), 600);
  });
};
export const TextContent = ({ text }: { text: TextContentProps }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      className={
        "pt-[32] pr-[63] pb-[104] pl-[28] rounded-[16] bg-[#354257] box-border relative"
      }
    >
      <TextModule
        text={text.title}
        as={"h4"}
        text_color={"#C5A87E"}
        font_size={13}
        line_height={"19px"}
        letter_spacing={"-0.018em"}
      />
      <pre
        className={`text-base mt-6 max-w-[461px] whitespace-pre-wrap break-words`}
        style={{
          lineHeight: "24px",
          letterSpacing: "-0.018em",
          fontFamily: "SB-Sans-text",
        }}
      >
        {text.content}
      </pre>

      <div
        className={
          "absolute right-[36px] bottom-[32px] flex items-center cursor-pointer"
        }
        onClick={() => useHandleCopy(text.content, setIsCopied)}
      >
        <Image
          src={`${ICONS_PATH}/copy.svg`}
          alt={"Копировать"}
          width={24}
          height={24}
          className={"mr-2"}
        />
        <TextModule
          text={isCopied ? "Скопировано" : "Копировать"}
          as={"span"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          text_color={isCopied ? "#4CAF50" : "#D7D9DD"}
        />
      </div>
    </div>
  );
};
