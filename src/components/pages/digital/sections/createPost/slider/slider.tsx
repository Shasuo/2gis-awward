import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import React from "react";

import "swiper/css";

const images = [
  "digital-perview-0.webp",
  "digital-perview-1.webp",
  "digital-perview-2.webp",
  "digital-perview-3.webp",
  "digital-perview-4.webp",
];

export const Slider = () => {
  return (
    <div className="max-tablet:mx-auto max-tablet:mt-[40px] relative mr-[62]">
      <Swiper
        className="max-tablet:max-w-[344] flex max-w-[359]"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: ".custom-prev__Digital",
          nextEl: ".custom-next__Digital",
        }}
        pagination={{
          el: ".custom-pagination__Digital",
          clickable: true,
        }}
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`${IMAGES_PATH}/${el}`}
              alt={"Создайте пост"}
              width={359}
              height={568}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-prev custom-prev__Digital max-tablet:hidden"
        aria-label="Previous slide"
      >
        <Image
          src={`${ICONS_PATH}/arrow_left.svg`}
          alt={"Предыдущий слайд"}
          width={13}
          height={12}
          className={"w-fit mx-auto"}
        />
      </button>
      <button
        className="custom-next custom-next__Digital max-tablet:hidden"
        aria-label="Next slide"
      >
        <Image
          src={`${ICONS_PATH}/arrow_left.svg`}
          alt={"Следующий слайд"}
          width={13}
          height={12}
          className={"w-fit mx-auto"}
          style={{ transform: "rotate(-180deg)" }}
        />
      </button>
      <div className="custom-pagination custom-pagination__Digital mt-6 flex justify-center gap-2" />
    </div>
  );
};
