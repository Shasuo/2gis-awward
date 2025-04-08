import { TextModule } from "@/components/texts/textModule";
import { Button } from "@/components/pages/digital/sections/morePublications/button/button";

const buttons = ["#премия2ГИС", "#2GISawards"];
export const MorePublications = () => {
  return (
    <section
      className={
        "max-tablet:mx-auto max-tablet:max-w-[344px] max-tablet:mt-[80] max-tablet:block p-12 rounded-[16] box-border flex items-center justify-between mt-[100]"
      }
      style={{ border: "1px solid #4E5E7F" }}
    >
      <div
        className={
          "max-tablet:max-w-[271px] max-tablet:mx-auto max-tablet:text-center max-tablet:text-[18px] max-tablet:leading-[24px] max-tablet:tracking-[-0.018em] text-[24px] font-display leading-[130%] tracking-[0.015em] max-w-[390px]"
        }
      >
        Еще больше публикаций ищите в соц-сетях по&nbsp;хештегам
      </div>
      <div
        className={
          "max-tablet:mx-auto max-tablet:mt-6 max-tablet:block flex gap-2 max-tablet:w-fit"
        }
      >
        {buttons.map((buttonText, index) => (
          <Button buttonText={buttonText} key={index} />
        ))}
      </div>
    </section>
  );
};
