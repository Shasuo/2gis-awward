import { TextModule } from "@/components/texts/textModule";
import { useState } from "react";
import { useHandleCopy } from "@/components/pages/personalized/sections/readyMadeTexts/texts/textContent/textContent";

export const Button = ({ buttonText }: { buttonText: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      className={
        "active:bg-[#364464] hover:bg-[#364464] cursor-pointer px-7 box-border pt-[17] pb-[11] rounded-[8] w-[228] flex justify-center"
      }
      style={{ border: "1px solid #4E5E7F" }}
      onClick={() => useHandleCopy(buttonText, setIsCopied)}
    >
      <TextModule
        text={isCopied ? "Скопировано" : buttonText}
        display
        font_size={24}
        line_height={"130%"}
        letter_spacing={"0.015em"}
        text_color={isCopied ? "#4CAF50" : "white"}
      />
    </div>
  );
};
