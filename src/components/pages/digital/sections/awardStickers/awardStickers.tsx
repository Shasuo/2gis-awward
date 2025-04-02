import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";

export const AwardStickers = () => {
  return (
    <section className={"mt-[141] rounded-[32] bg-[#0C132D] flex"}>
      <Image
        src={`${IMAGES_PATH}/awardStickersPerview.webp`}
        alt={""}
        width={540}
        height={540}
        className={"rounded-8"}
      />
      <div className={"ml-12 pt-12 pb-12 box-border"}>
        <TextModule
          text={"Диджитал-стикеры"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"h4"}
        />

        <TextModule
          text={"Украсьте вашу публикацию стикерами Премии"}
          font_size={40}
          font_weight={600}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
          max_width={468}
          margin_top={132}
          as={"h2"}
        />
        <div className={"mt-12 max-w-[355]"}>
          <div className={"flex gap-3"}>
            <Link
              href={"#"}
              className={
                "bg-[#AB844C] flex items-center box-border py-3 px-6 rounded-[8]"
              }
            >
              <Image
                src={`${ICONS_PATH}/download.svg`}
                alt={"Скачать РУ"}
                width={24}
                height={24}
              />
              <TextModule
                text={"Скачать РУ"}
                font_size={16}
                line_height={"24px"}
                letter_spacing={"-0.018em"}
                margin_left={12}
                as={"span"}
              />
            </Link>
            <Link
              href={"#"}
              className={
                "bg-[#AB844C] flex items-center box-border py-3 px-6 rounded-[8]"
              }
            >
              <Image
                src={`${ICONS_PATH}/download.svg`}
                alt={"Скачать EN"}
                width={24}
                height={24}
              />
              <TextModule
                text={"Скачать EN"}
                font_size={16}
                line_height={"24px"}
                letter_spacing={"-0.018em"}
                margin_left={12}
                as={"span"}
              />
            </Link>
          </div>
          <Link
            href={"#"}
            className={
              "mt-3 w-full py-3 box-border bg-[#2A3653] rounded-[8] flex justify-center"
            }
          >
            <TextModule
              text={"Инструкция"}
              font_size={16}
              line_height={"24px"}
              letter_spacing={"-0.018em"}
              as={"span"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
