import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import Image from "next/image";
import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import { CardProps } from "@/components/pages/home/sections/tellTheAudience/cards";

export const Card = ({ href, img, text }: CardProps) => {
  return (
    <Link
      href={href}
      className={`p-[36] box-border w-[360] h-[408] bg-[#364463] rounded-[16] flex`}
      style={{
        flexDirection: "column",
        backgroundImage: `url(${IMAGES_PATH}/${img})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={"flex"}>
        <Image
          src={`${ICONS_PATH}/link.svg`}
          alt={"перейти"}
          width={40}
          height={40}
        />
        <div
          className={"rounded-[12] box-border h-10 px-[15] py-2 ml-[10]"}
          style={{ border: "1px solid white" }}
        >
          <TextModule
            text={"Соц.сети"}
            font_size={16}
            line_height={"24px"}
            letter_spacing={"-0.018em"}
            margin_top={-1}
          />
        </div>
      </div>
      <TextModule
        text={text}
        font_size={24}
        line_height={"130%"}
        letter_spacing={"-0.015em"}
        display
        as={"h4"}
        margin_top={"auto"}
      />
    </Link>
  );
};
