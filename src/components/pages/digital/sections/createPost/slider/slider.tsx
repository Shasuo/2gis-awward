import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { TextContent } from "@/components/pages/personalized/sections/readyMadeTexts/texts/textContent/textContent";
import Image from "next/image";
import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import React from "react";
import { TextContentProps } from "@/components/pages/personalized/sections/readyMadeTexts/texts/texts";
import "swiper/css";

const texts: TextContentProps[] = [
  {
    title: "Нейтральный стиль:",
    content: `Мы получили Премию 2ГИС!
        
Это значит, что наш бизнес вошёл в число лучших по мнению пользователей — и для нас это большая гордость.
        
Спасибо всем, кто делится отзывами, выбирает нас и возвращается.
        
📍 Найти нас в 2ГИС → [вставьте ссылку]`,
  },
  {
    title: "Деловой стиль:",
    content: `Наш сервис стал победителем Премии 2ГИС.
        
Это результат вашей поддержки, обратной связи и доверия.
        
Мы благодарим всех, кто помогает нам становиться лучше каждый день.
        
Увидеть нас в 2ГИС → [вставьте ссылку]`,
  },
  {
    title: "Лёгкий, дружелюбный стиль:",
    content: `Ого! Мы взяли Премию 2ГИС!
Спасибо вам за тёплые отзывы, высокие оценки и добрые слова.
Всё это — про вас и для вас 💛
        
Загляните к нам в 2ГИС → [вставьте ссылку]`,
  },
];

export const Slider = () => {
  return (
    <div className="relative mr-[62]">
      <Swiper
        className="flex max-w-[359]"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        navigation={{
          prevEl: ".custom-prev__Digital",
          nextEl: ".custom-next__Digital",
        }}
        pagination={{
          el: ".custom-pagination__Digital",
          clickable: true,
        }}
      >
        {texts.map((el, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`${IMAGES_PATH}/digital-perview.webp`}
              alt={""}
              width={359}
              height={568}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-prev custom-prev__Digital"
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
        className="custom-next custom-next__Digital"
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
