import { TextModule } from "@/components/texts/textModule";
import { useState } from "react";
import { useHandleCopy } from "@/components/pages/personalized/sections/readyMadeTexts/texts/textContent/textContent";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const Button = ({ buttonText }: { buttonText: string }) => {
  const language = useAtom(languageRuAtom)[0];
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      className={
        "max-tablet:mx-auto max-tablet:mt-2 max-tablet:w-fit active:bg-[#364464] hover:bg-[#364464] cursor-pointer px-7 box-border pt-[17] pb-[11] rounded-[8] w-[228] flex justify-center"
      }
      style={{ border: "1px solid #4E5E7F" }}
      onClick={() => useHandleCopy(buttonText, setIsCopied)}
    >
      <div
        className={
          "max-tablet:text-[18px] max-tablet:leading-6 max-tablet:tracking-[-0.018em] font-display text-[24px] leading-[130%] tracking-[0.015em]"
        }
        style={{ color: isCopied ? "#4CAF50" : "white" }}
      >
        {isCopied ? (language ? "Скопировано" : "Көшірілді") : buttonText}
      </div>
    </div>
  );
};
