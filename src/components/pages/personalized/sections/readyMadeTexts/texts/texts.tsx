import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TextContent } from "./textContent/textContent";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";

export interface TextContentProps {
  title: string;
  content: string;
}

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

export const Texts = () => {
  return (
    <div className="max-tablet:mt-6 max-tablet:mx-auto max-tablet:max-w-[344px] relative">
      <Swiper
        className="flex max-w-[552]"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
      >
        {texts.map((el, index) => (
          <SwiperSlide key={index}>
            <TextContent text={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-prev max-tablet:hidden"
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
      <button className="custom-next max-tablet:hidden" aria-label="Next slide">
        <Image
          src={`${ICONS_PATH}/arrow_left.svg`}
          alt={"Следующий слайд"}
          width={13}
          height={12}
          className={"w-fit mx-auto"}
          style={{ transform: "rotate(-180deg)" }}
        />
      </button>
      <div className="custom-pagination mt-6 flex justify-center gap-2" />
    </div>
  );
};
