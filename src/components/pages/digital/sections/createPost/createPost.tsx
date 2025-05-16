import { Drops } from "@/components/pages/digital/sections/createPost/drops/drops";
import { Slider } from "@/components/pages/digital/sections/createPost/slider/slider";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const CreatePost = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section
      className={
        "max-tablet:block max-tablet:mt-[80] mt-[192] flex items-start justify-between"
      }
      id={"publication-topics"}
    >
      <div>
        <div className={"max-tablet:ml-9"}>
          <h4
            className={
              "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em]"
            }
          >
            {language ? "Темы публикаций" : "Жарияланымдар тақырыптары"}
          </h4>
          <h2
            className={
              "max-tablet:mt-7 max-tablet:text-[24px] max-tablet:leading-[130%] max-tablet:tracking-[-0.016em] mt-[15px] text-[40px] leading-[48px] tracking-[-0.016em] font-semibold"
            }
          >
            {language ? "Создайте пост" : "Пост жасаңыз"}
          </h2>
        </div>

        <Drops />
      </div>
      <Slider />
    </section>
  );
};
