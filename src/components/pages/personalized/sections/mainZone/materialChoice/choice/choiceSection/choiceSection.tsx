import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import {
  MaterialChoiceButtonsProps,
  MaterialChoiceButtonsProps__options,
} from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choice";
import { useState } from "react";

import { languageRuAtom, materialSizesAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";

export const ChoiceSection = ({
  block,
}: {
  block: MaterialChoiceButtonsProps;
}) => {
  const [active, setActive] = useState(block.type === "IMAGE");
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);
  return (
    <div className={"mb-6 w-[288] select-none"}>
      <div
        className={"h-[55px] flex items-center justify-between cursor-pointer"}
        style={{
          borderBottom: "1px solid #6D7181",
        }}
        onClick={() => setActive(!active)}
      >
        <h3
          className={
            "font-display text-[24px] leading-[130%] tracking-[0.015em]"
          }
        >
          {block.title}
        </h3>
        <Image
          src={`${ICONS_PATH}/materialsDropArrow.svg`}
          alt={"Раскрыть"}
          width={11}
          height={7}
          style={{
            transform: active ? "rotate(180deg)" : undefined,
            marginTop: active ? -6 : undefined,
          }}
        />
      </div>
      <div
        className={"mt-6 text-[#AFB1BA]"}
        style={{ display: active ? "block" : "none" }}
      >
        {block.sizes.map(
          (size: MaterialChoiceButtonsProps__options, index: number) => (
            <span
              className={
                "hover:text-[#D1AC77] mt-3 block font-display text-[24px] leading-[130%] tracking-[0.015em] cursor-pointer"
              }
              key={index}
              style={{
                color:
                  activeMaterial.sizes.width === size.width &&
                  activeMaterial.sizes.height === size.height &&
                  activeMaterial.type === block.type
                    ? "#D1AC77"
                    : undefined,
              }}
              onClick={() =>
                setActiveMaterial({
                  type: block.type,
                  sizes: { width: size.width, height: size.height },
                })
              }
            >
              {size.width + "x" + size.height}
            </span>
          ),
        )}
      </div>
    </div>
  );
};
