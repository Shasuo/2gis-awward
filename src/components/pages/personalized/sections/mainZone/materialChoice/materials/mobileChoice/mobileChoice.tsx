import { Button } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/mobileChoice/button";
import { MaterialChoiceButtons } from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import React from "react";
import { useAtom } from "jotai/index";
import { materialSizesAtom } from "@/atoms/atoms";

export const MobileChoice = () => {
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);
  return (
    <div className={"max-tablet:block hidden"}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={4}
        freeMode={true}
        modules={[FreeMode]}
      >
        {MaterialChoiceButtons[
          activeMaterial.type === "IMAGE" ? 0 : 1
        ].sizes.map((size, index: number) => (
          <SwiperSlide style={{ width: "fit-content" }} key={index}>
            <Button
              width={size.width}
              height={size.height}
              activeMaterial={activeMaterial}
              setActiveMaterial={setActiveMaterial}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide style={{ width: 20 }}></SwiperSlide>
      </Swiper>
    </div>
  );
};
