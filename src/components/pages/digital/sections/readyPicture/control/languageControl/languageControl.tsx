import { Dispatch, useState } from "react";

export const LanguageControl = ({
  setActiveLanguage,
  activeLanguage,
}: {
  setActiveLanguage: Dispatch<any>;
  activeLanguage: string;
}) => {
  return (
    <section
      className={
        "max-table:text-[18px] max-tablet:ml-3 flex items-center gap-[10] text-base"
      }
      style={{ lineHeight: "24px", letterSpacing: "-0.018em" }}
    >
      <div
        className={"cursor-pointer"}
        style={{ opacity: activeLanguage === "RU" ? 1 : 0.7 }}
        onClick={() => setActiveLanguage("RU")}
      >
        Ру
      </div>
      <div style={{ opacity: 0.7 }}>|</div>
      <div
        className={"cursor-pointer"}
        style={{ opacity: activeLanguage === "EN" ? 1 : 0.7 }}
        onClick={() => setActiveLanguage("EN")}
      >
        En
      </div>
    </section>
  );
};
