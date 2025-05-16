import { Dispatch } from "react";
import styles from "./pictureResolutionControl.module.css";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const PictureResolutionControl = ({
  setSize,
  size,
}: {
  setSize: Dispatch<any>;
  size: string;
}) => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={`max-tablet:flex max-tablet:gap-1 ${language ? "mt-6" : "mt-1"}`}
    >
      <div
        className={`max-tablet:px-4 max-tablet:py-[9.5px] max-tablet:rounded-[12px] max-tablet:border max-tablet:border-[#AB844C] cursor-pointer box-border ${size === "PICTURE" ? styles.active : ""}`}
        onClick={() => setSize("PICTURE")}
      >
        <div
          className={`max-tablet:text-[#AB844C] max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] max-tablet:mt-[2] font-display leading-[130%] tracking-[-0.015em] text-[24px] text-[#B7BBC3]`}
        >
          {language ? "Картинка" : "Сурет"} 1080х1080
        </div>
      </div>
      <div
        className={`max-tablet:px-4 max-tablet:py-[9.5px] max-tablet:rounded-[12px] max-tablet:border max-tablet:border-[#AB844C] cursor-pointer box-border  ${size === "VIDEO" ? styles.active : ""}`}
        onClick={() => setSize("VIDEO")}
      >
        <div
          className={`max-tablet:text-[#AB844C] max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] max-tablet:mt-[2] font-display leading-[130%] tracking-[-0.015em] text-[24px] mt-3 text-[#B7BBC3]`}
        >
          {language ? "Видео" : "Бейне"} 1920х1080
        </div>
      </div>
    </div>
  );
};
