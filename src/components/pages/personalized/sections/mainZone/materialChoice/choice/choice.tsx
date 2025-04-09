import Link from "next/link";
import { ChoiceSection } from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choiceSection/choiceSection";
import { mainMaterialTypeInterface } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";
import { DownloadAll } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/downloadButton/downloadAll";

export interface MaterialChoiceButtonsProps__options {
  width: number;
  height: number;
}
export interface MaterialChoiceButtonsProps extends mainMaterialTypeInterface {
  title: string;
  sizes: MaterialChoiceButtonsProps__options[];
}

export const MaterialChoiceButtons: MaterialChoiceButtonsProps[] = [
  {
    title: "Статичные картинки",
    type: "IMAGE",
    sizes: [
      { width: 1080, height: 1080 },
      { width: 1080, height: 1350 },
      { width: 1920, height: 1080 },
      { width: 1080, height: 1920 },
    ],
  },
  {
    title: "Видеооткрытка",
    type: "VIDEO",
    sizes: [
      { width: 1080, height: 1920 },
      { width: 1920, height: 1080 },
    ],
  },
];

export const Choice = () => {
  return (
    <div
      className={"max-tablet:hidden bg-[#0C132D] box-border p-12 relative"}
      style={{ borderRadius: "32px 0 0 32px" }}
    >
      {MaterialChoiceButtons.map(
        (block: MaterialChoiceButtonsProps, index: number) => (
          <ChoiceSection block={block} key={index} />
        ),
      )}
      <DownloadAll />
    </div>
  );
};
