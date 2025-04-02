import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";

export const ViewMaterials = () => {
  return (
    <section
      className={
        "mt-[140px] rounded-[16px] bg-[#AB844C] p-12 pb-[77] w-full box-border relative"
      }
    >
      <div>
        <div className={"bg-[#0C132D] px-[15] py-2 rounded-[12px] w-fit"}>
          <TextModule
            text={"Шаг 1"}
            font_size={16}
            line_height={"24px"}
            letter_spacing={"-0.018em"}
          />
        </div>

        <TextModule
          text={"Расскажите о своей победе прямо сейчас"}
          font_size={54}
          line_height={"92%"}
          letter_spacing={"-0.02em"}
          max_width={600}
          display
          margin_top={36}
          as={"h2"}
        />
        <TextModule
          text={
            "Мы подготовили для вас набор персонализированных визуалов и&nbsp;текстов для Ваших социальных сетей"
          }
          font_size={24}
          line_height={"130%"}
          letter_spacing={"-0.015em"}
          max_width={462}
          display
          margin_top={24}
          as={"p"}
        />
        <Link
          href={"/personalized"}
          className={
            "px-[38] py-[18] rounded-[8] box-border w-fit block mt-[46]"
          }
          style={{ border: "1px solid white" }}
        >
          <TextModule
            text={"Смотреть материалы"}
            font_size={16}
            line_height={"24px"}
            letter_spacing={"-0.018em"}
            as={"span"}
          />
        </Link>
      </div>
      <Image
        src={`${IMAGES_PATH}/awardWinner.webp`}
        alt={"Победитель Премии"}
        width={568}
        height={537}
        className={"absolute right-[-56] top-[-31]"}
      />
    </section>
  );
};
