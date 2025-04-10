import { LanguageControl } from "@/components/pages/digital/sections/readyPicture/control/languageControl/languageControl";
import { PictureResolutionControl } from "@/components/pages/digital/sections/readyPicture/control/pictureResolutionControl/pictureResolutionControl";
import { Dispatch } from "react";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

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
  const language = useAtom(languageRuAtom)[0];
  return (
    <section
      className={"mt-8 pt-6 max-w-[468] select-none"}
      style={{ borderTop: "1px solid #656E7F" }}
    >
      {language && (
        <LanguageControl
          setActiveLanguage={setActiveLanguage}
          activeLanguage={activeLanguage}
        />
      )}

      <PictureResolutionControl size={size} setSize={setSize} />
    </section>
  );
};
