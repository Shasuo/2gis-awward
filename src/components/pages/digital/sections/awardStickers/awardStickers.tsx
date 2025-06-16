import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import "swiper/css";
import { useAtom } from "jotai/index";
import { languageRuAtom, mainModalAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";
import { StickersInstructions } from "@/layout/modals/stickersInstructions/stickersInstructions";

const images = [
  "award-stickers-1.webp",
  "award-stickers-2.webp",
  "award-stickers-3.webp",
  "award-stickers-4.webp",
];
export const AwardStickers = () => {
  /*<!-- href={language ? "/RU_instruction.pdf" : "KZ_instruction.pdf"} -->*/
  const language = useAtom(languageRuAtom)[0];
  const setMainModal = useAtom(mainModalAtom)[1];
  return (
    <section
      className={`max-tablet:max-w-[344] max-tablet:block max-tablet:mt-[80] max-tablet:max-h-[unset] max-tablet:mx-auto mt-[141] rounded-[32] bg-[#0C132D] flex ${language ? "max-h-[540]" : ""}`}
      id={"digital-stickers"}
      style={{
        boxShadow: "0px 0px 90px 10px rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className={"max-tablet:block hidden ml-6 pt-12"}>
        <h4 className={"text-base leading-6 tracking-[-0.018em]"}>
          {language ? "Диджитал-стикеры" : "Диджитал-стикерлер"}
        </h4>
        <h2
          className={
            "max-w-[284] mt-7 font-semibold text-[24px] leading-[130%] tracking-[-0.016em]"
          }
        >
          {language
            ? "Украсьте вашу публикацию стикерами Премии"
            : "Жарияланымыңызды 2GIS Awards стикерлерімен безендіріңіз"}
        </h2>
      </div>
      <div className={"max-tablet:mt-12 relative"}>
        <Swiper
          className="max-tablet:mr-[5px] max-tablet:ml-[5px] max-tablet:max-w-[334px] max-tablet:h-[360px] flex max-w-[540] h-[540] rounded-[32]"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          grabCursor={true}
          navigation={{
            prevEl: ".custom-prev__AwardStickers",
            nextEl: ".custom-next__AwardStickers",
          }}
          pagination={{
            el: ".custom-pagination__AwardStickers",
            clickable: true,
          }}
        >
          {images.map((el, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`${IMAGES_PATH}/${el}`}
                alt={""}
                width={540}
                height={540}
                className={
                  "max-tablet:w-[334] max-tablet:h-[360px] w-[540] h-[540]"
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={
            "max-tablet:hidden absolute left-9 top-9 z-10 flex gap-3 select-none"
          }
        >
          <button
            className="custom-prev__NoBorder custom-prev__AwardStickers w-12 h-12 flex items-center justify-center cursor-pointer"
            aria-label="Previous slide"
          >
            <Image
              src={`${ICONS_PATH}/arrow_left.svg`}
              alt={"Предыдущий слайд"}
              draggable={"false"}
              width={24}
              height={21}
              className={"w-6 mx-auto"}
            />
          </button>
          <button
            className="custom-next__NoBorder custom-next__AwardStickers w-12 h-12 flex items-center justify-center cursor-pointer"
            aria-label="Next slide"
          >
            <Image
              src={`${ICONS_PATH}/arrow_left.svg`}
              alt={"Следующий слайд"}
              draggable={"false"}
              width={24}
              height={21}
              className={"w-6 mx-auto"}
              style={{ transform: "rotate(-180deg)" }}
            />
          </button>
        </div>
        <div className="max-tablet:bottom-[23] max-tablet:left-[50%] transform max-tablet:translate-x-[-50%] custom-pagination custom-pagination__AwardStickers mt-6 flex justify-center gap-8 absolute left-9 bottom-9 z-10" />
      </div>

      <div
        className={
          "max-tablet:max-w-[297] max-tablet:ml-auto max-tablet:pt-6 max-tablet:mr-auto ml-12 pt-12 pb-12 box-border"
        }
      >
        <div className={"max-tablet:hidden"}>
          <TextModule
            text={language ? "Диджитал-стикеры" : "Диджитал-стикерлер"}
            font_size={16}
            line_height={"24px"}
            letter_spacing={"-0.018em"}
            as={"h4"}
          />

          <TextModule
            text={
              language
                ? "Украсьте вашу публикацию стикерами Премии"
                : "Жарияланымыңызды 2GIS Awards стикерлерімен безендіріңіз"
            }
            font_size={40}
            font_weight={600}
            line_height={"48px"}
            letter_spacing={"-0.016em"}
            max_width={468}
            margin_top={language ? 132 : 44}
            as={"h2"}
          />
        </div>

        <div
          className={`max-tablet:mt-0 mt-12 ${language ? "max-w-[355]" : "max-w-[408]"}`}
        >
          <div className={"flex gap-3"}>
            <Link
              href={"/download/stickers_RU_2gis_awards.zip"}
              className={
                "hover:bg-[#C5A87E] active:bg-[#C5A87E] max-tablet:h-[56] max-tablet:flex max-tablet:justify-center max-tablet:px-[unset] max-tablet:w-[146px] bg-[#AB844C] flex items-center box-border py-3 px-6 rounded-[8]"
              }
              download
              onClick={() => metrika("download_digital_stickers")}
            >
              <Image
                src={`${ICONS_PATH}/download.svg`}
                alt={"Скачать РУ"}
                width={24}
                height={24}
              />
              <span
                className={
                  "max-tablet:ml-2 max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em] ml-3"
                }
              >
                {language ? "Скачать РУ" : "Жүктеп алу RU"}
              </span>
            </Link>
            <Link
              href={"/download/stickers_EN_2gis_awards.zip"}
              className={
                "hover:bg-[#C5A87E] active:bg-[#C5A87E] max-tablet:h-[56] max-tablet:flex max-tablet:justify-center max-tablet:px-[unset] max-tablet:w-[146px] bg-[#AB844C] flex items-center box-border py-3 px-6 rounded-[8]"
              }
              download
              onClick={() => metrika("download_digital_stickers")}
            >
              <Image
                src={`${ICONS_PATH}/download.svg`}
                alt={"Скачать EN"}
                width={24}
                height={24}
              />
              <span
                className={
                  "max-tablet:ml-2 max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em] ml-3"
                }
              >
                {language ? "Скачать EN" : "Жүктеп алу EN"}
              </span>
            </Link>
          </div>

          <div
            className={
              "hover:bg-[#666D7D] active:bg-[#666D7D] max-tablet:h-[56] mt-3 w-full py-3 box-border bg-[#2A3653] rounded-[8] flex justify-center items-center cursor-pointer"
            }
            onClick={() => {
              metrika("download_digital_manual");
              setMainModal("StickersInstructions");
            }}
          >
            <span className={"text-base leading-6 tracking-[-0.018em] mt-[-2]"}>
              {language ? "Инструкция" : "Нұсқаулық"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
