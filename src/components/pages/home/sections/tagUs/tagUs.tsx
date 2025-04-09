import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";

export const TagUs = () => {
  return (
    <section
      className={`max-tablet:h-[900px] max-tablet:overflow-hidden max-tablet:mt-[80] mt-[186] relative `}
    >
      <div
        className={"max-tablet:max-w-[350] mx-auto block w-fit relative z-[3]"}
      >
        <h3
          className={
            "max-tablet:font-normal max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:text-[30px] text-center max-w-[704px] text-[40px] leading-[48px] tracking-[-0.016em] font-semibold"
          }
        >
          Делитесь радостной новостью <br />с клиентами и{" "}
          <span style={{ color: "#C5A87E" }}>отмечайте нас</span> <br />в
          социальных сетях
        </h3>
        <div
          className={
            "max-tablet:block max-tablet:mt-[24] flex mt-[38] mx-auto w-fit"
          }
        >
          <div
            className={
              "max-tablet:mx-auto px-7 pb-[11] pt-[17] box-border rounded-[8]"
            }
            style={{ background: "rgba(138, 159, 196, 0.3)" }}
          >
            <span
              className={
                "max-tablet:tracking-[-0.018em] max-tablet:leading-[24px] max-tablet:text-[18px] text-[24px] leading-[130%] tracking-[-0.015em] font-display"
              }
            >
              #премия2ГИС
            </span>
          </div>
          <div
            className={
              "max-tablet:w-fit max-tablet:mt-2 max-tablet:ml-auto max-tablet:mr-auto max-tablet:ml-0 px-7 pb-[11] pt-[17] box-border rounded-[8] ml-3"
            }
            style={{ background: "rgba(138, 159, 196, 0.3)" }}
          >
            <span
              className={
                "max-tablet:tracking-[-0.018em] max-tablet:leading-[24px] max-tablet:text-[18px] text-[24px] leading-[130%] tracking-[-0.015em] font-display"
              }
            >
              #award2GIS
            </span>
          </div>
        </div>
        <div
          className={
            "max-tablet:flex items-center bg-[#AB844C] mt-[385px] rounded-[8px] justify-center hidden w-full max-w-[285px] h-[56px] mx-auto"
          }
        >
          <span
            className={"block text-[14px] leading-[150%] tracking-[-0.01em]"}
          >
            Больше победителей
          </span>
        </div>
      </div>
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
