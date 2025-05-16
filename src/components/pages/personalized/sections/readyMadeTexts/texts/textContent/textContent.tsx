import { TextContentProps } from "../texts";
import { TextModule } from "@/components/texts/textModule";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { Dispatch, useState } from "react";
import { metrika } from "@/components/scripts/metrika";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const useHandleCopy = (text: string, setState: Dispatch<any>) => {
  navigator.clipboard.writeText(text.trim()).then(() => {
    setState(true);
    setTimeout(() => setState(false), 600);
  });
};
export const TextContent = ({ text }: { text: TextContentProps }) => {
  const [isCopied, setIsCopied] = useState(false);
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={
        "max-tablet:px-7 pt-[32] pr-[63] pb-[104] pl-[28] rounded-[16] bg-[#354257] box-border relative"
      }
    >
      <h4
        className={
          "max-tablet:leading-[110%] max-tablet:text-[12px] text-[#C5A87E] text-[13px] leading-[19px] tracking-[-0.018em]"
        }
      >
        {text.title}
      </h4>

      <pre
        className={`max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] max-tablet:text-[14px] max-tablet:max-w-[286px] text-base mt-6 max-w-[461px] whitespace-pre-wrap break-words leading-6 tracking-[-0.018em]`}
        style={{
          fontFamily: "SB-Sans-text",
        }}
      >
        {text.content}
      </pre>

      <div
        className={
          "absolute right-[36px] bottom-[32px] flex items-center cursor-pointer"
        }
        onClick={() => {
          useHandleCopy(text.content, setIsCopied);
          metrika("copy");
        }}
      >
        <Image
          src={`${ICONS_PATH}/copy.svg`}
          alt={"Копировать"}
          width={24}
          height={24}
          className={"max-tablet:w-[18px] max-tablet:h-[18px] mr-2"}
        />
        <span
          className={
            "max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-base leading-6 tracking-[-0.018em]"
          }
          style={{ color: isCopied ? "#4CAF50" : "#D7D9DD" }}
        >
          {isCopied
            ? language
              ? "Скопировано"
              : "Көшірілді"
            : language
              ? "Копировать"
              : "Көшіру"}
        </span>
      </div>
    </div>
  );
};
