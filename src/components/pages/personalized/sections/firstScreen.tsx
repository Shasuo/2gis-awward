import { TextModule } from "@/components/texts/textModule";

export const FirstScreen = () => {
  return (
    <div
      className={
        "max-tablet:block max-tablet:ml-9 flex items-start mt-[34] font-display"
      }
    >
      <h1
        className={
          "max-tablet:max-w-[313px] max-tablet:text-[30px] max-tablet:leading-[100%] max-tablet:tracking-[0.01em] max-w-[612px] text-[54px] leading-[92%] tracking-[-0.02em]"
        }
      >
        Расскажите о своей победе прямо сейчас
      </h1>
      <p
        className={
          "max-tablet:ml-0 max-tablet:mt-8 max-tablet:max-w-[309px] max-w-[324px] text-base leading-6 tracking-[-0.018em] ml-[155px]"
        }
      >
        Мы подготовили набор текстовых и&nbsp;визуально инструментов, чтобы вы
        без&nbsp;дополнительных затрат рассказали клиентам о вашей победе.
      </p>
    </div>
  );
};
