import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { MaterialChoiceButtons } from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choice";
import { mainMaterialInterface } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";
import { Dispatch } from "react";

export const ControlButton = ({
  setActiveMaterial,
  left,
  activeMaterial,
}: {
  setActiveMaterial: Dispatch<mainMaterialInterface>;
  left?: boolean;
  activeMaterial: mainMaterialInterface;
}) => {
  const sizeSwitchingHandle = () => {
    const sizes = MaterialChoiceButtons.find(
      (item) => item.type === activeMaterial.type,
    )?.sizes;
    if (sizes) {
      const currentIndex = sizes.findIndex(
        (size) =>
          size.width === activeMaterial.sizes.width &&
          size.height === activeMaterial.sizes.height,
      );
      if (currentIndex === -1) {
        throw new Error("No matching size found in the array.");
      }
      let Index = 1;
      if (left) {
        Index = (currentIndex - 1 + sizes.length) % sizes.length;
      } else {
        Index = (currentIndex + 1) % sizes.length;
      }

      setActiveMaterial({
        ...activeMaterial,
        sizes: {
          width: sizes[Index].width,
          height: sizes[Index].height,
        },
      });
    }
  };

  return (
    <div
      className={
        "w-12 h-12 rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-white invertImgHover select-none"
      }
      style={{ border: "1px solid #D9D9D9" }}
      onClick={sizeSwitchingHandle}
    >
      <Image
        src={`${ICONS_PATH}/arrow_left.svg`}
        alt={"Переключить"}
        width={13}
        height={12}
        style={{ transform: `${left ? undefined : "rotate(180deg)"}` }}
      />
    </div>
  );
};
