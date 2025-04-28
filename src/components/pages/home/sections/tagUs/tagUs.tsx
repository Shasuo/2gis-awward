import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { TagUs_text } from "@/components/reused/tagUs_text/tagUs_text";

export const TagUs = () => {
  return (
    <section
      className={`max-tablet:h-[900px] max-tablet:overflow-hidden max-tablet:mt-[80] mt-[186] relative `}
    >
      <TagUs_text />
      <Image
        src={`${IMAGES_PATH}/tagUsBig.webp`}
        alt={"Отмечайте нас"}
        width={1234}
        height={711}
        className={
          "max-tablet:translate-x-[-58%] max-tablet:left-[42%] transform translate-x-[-50%] left-[50%] max-tablet:top-[190px] absolute top-18 min-w-[1234] h-auto z-[1]"
        }
        style={{ cursor: `url("${ICONS_PATH}/cursor.svg"), auto` }}
      />
      <Image
        src={`${IMAGES_PATH}/sublight.webp`}
        alt={"Свет"}
        width={972}
        height={1398}
        className={
          "max-tablet:hidden absolute left-[-50] top-[-300] min-w-[1234] h-auto z-[2]"
        }
        style={{ transform: "rotate(-75deg)" }}
      />
    </section>
  );
};
