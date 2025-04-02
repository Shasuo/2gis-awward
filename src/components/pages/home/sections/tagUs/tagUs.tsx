import { TextModule } from "@/components/texts/textModule";
import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";

export const TagUs = () => {
  return (
    <section className={"mt-[186] relative"}>
      <div className={"mx-auto block w-fit relative z-[3]"}>
        <TextModule
          text={
            "Делитесь радостной новостью <br/>с клиентами и <span style='color: #C5A87E'>отмечайте нас</span> <br/>в социальных сетях"
          }
          as={"h3"}
          text_centered
          max_width={704}
          font_size={40}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
          font_weight={600}
        />
        <div className={"flex mt-[38] mx-auto w-fit"}>
          <div
            className={"px-7 pb-[11] pt-[17] box-border rounded-[8]"}
            style={{ background: "rgba(138, 159, 196, 0.3)" }}
          >
            <TextModule
              text={"#премия2ГИС"}
              as={"span"}
              font_size={24}
              line_height={"130%"}
              letter_spacing={"-0.015em"}
              display
            />
          </div>
          <div
            className={"px-7 pb-[11] pt-[17] box-border rounded-[8] ml-3"}
            style={{ background: "rgba(138, 159, 196, 0.3)" }}
          >
            <TextModule
              text={"#award2GIS"}
              as={"span"}
              font_size={24}
              line_height={"130%"}
              letter_spacing={"-0.015em"}
              display
            />
          </div>
        </div>
      </div>
      <Image
        src={`${IMAGES_PATH}/tagUsBig.webp`}
        alt={"Отмечайте нас"}
        width={1234}
        height={711}
        className={"absolute left-[-50] top-18 min-w-[1234] h-auto z-[1]"}
      />
      <Image
        src={`${IMAGES_PATH}/sublight.webp`}
        alt={"Свет"}
        width={972}
        height={1398}
        className={"absolute left-[-50] top-[-300] min-w-[1234] h-auto z-[2]"}
        style={{ transform: "rotate(-75deg)" }}
      />
    </section>
  );
};
