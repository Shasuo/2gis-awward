import { LanguageControl } from "@/components/pages/digital/sections/readyPicture/control/languageControl/languageControl";
import { PictureResolutionControl } from "@/components/pages/digital/sections/readyPicture/control/pictureResolutionControl/pictureResolutionControl";
import { Dispatch } from "react";

export const Control = ({
  setActiveLanguage,
  activeLanguage,
  setSize,
  size,
}: {
  setActiveLanguage: Dispatch<any>;
  activeLanguage: string;
  setSize: Dispatch<any>;
  size: string;
}) => {
  return (
    <section
      className={"mt-8 pt-6 max-w-[468] select-none"}
      style={{ borderTop: "1px solid #656E7F" }}
    >
      <LanguageControl
        setActiveLanguage={setActiveLanguage}
        activeLanguage={activeLanguage}
      />
      <PictureResolutionControl size={size} setSize={setSize} />
    </section>
  );
};
