import { Choice } from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choice";
import { Materials } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/materials";

export interface mainSizesInterface {
  width: number;
  height: number;
}

export interface mainMaterialTypeInterface {
  type: "IMAGE" | "VIDEO";
  ru: boolean
}

export interface mainMaterialInterface extends mainMaterialTypeInterface {
  sizes: mainSizesInterface;
}
export const MaterialChoice = () => {
  return (
    <section
      className={
        "max-tablet:pb-12 max-tablet:h-fit max-tablet:block mt-[30px] flex rounded-[32px] h-[648] bg-[#233149]"
      }
    >
      <Choice />
      <Materials />
    </section>
  );
};
