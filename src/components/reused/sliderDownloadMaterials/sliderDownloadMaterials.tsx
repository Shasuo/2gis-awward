import { DownloadButtons } from "@/components/pages/home/sections/becomeMoreVisible/downloadButtons";
import { Card } from "@/components/pages/home/sections/tellTheAudience/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import React from "react";
import "swiper/css";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

const images = [
  "becomemorevisible-slider-img-1.webp",
  "becomemorevisible-slider-img-2.webp",
  "becomemorevisible-slider-img-3.webp",
  "becomemorevisible-slider-img-4.webp",
];
export const SliderDownloadMaterials = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={
        "max-tablet:max-w-[344px] max-tablet:mx-auto max-tablet:block max-tablet:mt-10 mt-[26] flex justify-between"
      }
    >
      <div
        className={`max-tablet:p-6 max-tablet:w-[344] max-tablet:h-[344] p-[36] box-border w-[744] h-[408] rounded-[16] relative overflow-hidden`}
      >
        <div className="max-tablet:hidden absolute left-0 top-0 z-0">
          <Swiper
            className="flex max-w-[744] h-[408]"
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            grabCursor={true}
            navigation={{
              prevEl: ".custom-prev__BecomeMoreVisible",
              nextEl: ".custom-next__BecomeMoreVisible",
            }}
            autoplay={{ delay: 5000 }}
          >
            {images.map((el, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`${IMAGES_PATH}/${el}`}
                  alt={""}
                  width={744}
                  height={408}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Image
          src={`${IMAGES_PATH}/becomemorevisible-slider-img__mobile.webp`}
          alt={"Офлайн стикеры"}
          width={344}
          height={344}
          className={
            "max-tablet:block rounded-[16px] absolute top-0 left-0 h-[344px] hidden"
          }
        />

        <div
          className={
            "max-tablet:hidden absolute right-7 top-7 z-10 flex gap-3 select-none"
          }
        >
          <button
            className="custom-prev__NoBorder custom-prev__BecomeMoreVisible w-12 h-12 flex items-center justify-center cursor-pointer"
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
            className="custom-next__NoBorder custom-next__BecomeMoreVisible w-12 h-12 flex items-center justify-center cursor-pointer"
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

        <div className={"relative z-1 select-none"}>
          <div
            className={
              "max-tablet:h-6 max-tablet:py-1 max-tablet:rounded-[8] rounded-[12] box-border h-10 px-[15] py-2 w-fit"
            }
            style={{ border: "1px solid white" }}
          >
            <div
              className={
                "max-tablet:mt-0 max-tablet:leading-[110%] max-tablet:text-[12px] text-base leading-6 tracking-[-0.018em] mt-[-1]"
              }
            >
              {language ? <>Печать</> : <>Басып шығару</>}
            </div>
          </div>
          <h4
            className={
              "max-tablet:tracking-[-0.018em] max-tablet:leading-[24px] max-tablet:text-[18px] max-tablet:mt-[15px] text-[24px] leading-[130%] tracking-[-0.015em] font-display mt-6"
            }
          >
            {language ? <>Офлайн-стикеры</> : <>Офлайн-стикерлер</>}
          </h4>
        </div>

        <DownloadButtons />
      </div>
      <div className={"max-tablet:mt-2"}>
        <Card
          img={"check.webp"}
          text={language ? "Текст на чеке" : "Чектегі мәтін"}
          href={"https://award-2023.2gis.ru/cheque/"}
          blank
          metrikaName={"manual"}
          hover={"zoom"}
        />
      </div>
    </div>
  );
};
