import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";
import { WorkSpace } from "@/components/pages/personalized/sections/mainZone/workSpace/workSpace";

export const MainZone = () => {
  return (
    <div
      className={"mt-[105] box-border rounded-[32] h-[769] relative"}
      style={{ border: "1px solid white" }}
    >
      <Image
        src={`${IMAGES_PATH}/mainAreaPlaceholder.webp`}
        alt={"Открытки (демо)"}
        width={1128}
        height={771}
        className={"absolute left-0 top-0 rounded-[32] z-[-1]"}
      />
      <WorkSpace />
    </div>
  );
};
