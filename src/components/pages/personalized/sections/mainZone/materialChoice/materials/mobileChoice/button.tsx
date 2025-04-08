import styles from "./button.module.css";
import {
  mainMaterialInterface,
  mainMaterialTypeInterface,
} from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";
import { Dispatch } from "react";
import { MaterialChoiceButtons } from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choice";

interface BaseProps {
  activeMaterial: mainMaterialInterface;
  setActiveMaterial: Dispatch<mainMaterialInterface>;
}

interface SizeProps extends BaseProps {
  height: number;
  width: number;
  type?: never;
  title?: never;
}

interface TypeProps extends BaseProps, mainMaterialTypeInterface {
  title: string;
  height?: never;
  width?: never;
}

type ButtonProps = SizeProps | TypeProps;

export const Button = ({
  height,
  width,
  activeMaterial,
  setActiveMaterial,
  type,
  title,
}: ButtonProps) => {
  const setDataHandle = () => {
    if (!type) {
      setActiveMaterial({
        ...activeMaterial,
        sizes: { width: width, height: height },
      } as mainMaterialInterface);
    } else {
      let sendObject = activeMaterial;
      const normalObject = {
        ...activeMaterial,
        type: type,
      };
      if (type !== "IMAGE") {
        const existSize = !!MaterialChoiceButtons[1].sizes.find(
          (item) =>
            item.width === activeMaterial.sizes.width &&
            item.height === activeMaterial.sizes.height,
        );
        if (existSize) {
          sendObject = normalObject as mainMaterialInterface;
        } else {
          sendObject = {
            type: type,
            sizes: { width: 1080, height: 1920 },
          } as mainMaterialInterface;
        }
      } else {
        sendObject = normalObject as mainMaterialInterface;
      }

      setActiveMaterial(sendObject);
    }
  };

  return (
    <div
      className={`cursor-pointer max-tablet:flex h-10 hidden px-4 text-[14px] leading-[150%] tracking-[-0.01em] items-center text-[#AB844C] rounded-[12px] ${activeMaterial.sizes.width === width && activeMaterial.sizes.height === height ? styles.active : ""} ${activeMaterial.type === type ? styles.active__type : ""}`}
      style={{ border: "1px solid #AB844C" }}
      onClick={setDataHandle}
    >
      {title || `${width}x${height}`}
    </div>
  );
};
