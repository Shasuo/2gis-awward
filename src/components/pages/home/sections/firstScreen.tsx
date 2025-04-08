import { TextModule } from "@/components/texts/textModule";

export const FirstScreen = () => {
  return (
    <section
      className={
        "max-tablet:mx-auto max-tablet:max-w-[321] max-tablet:block max-tablet:mt-[50px] mt-[142px] flex items-start justify-between"
      }
    >
      <h1
        className={
          "max-tablet:max-w-[321] max-tablet:text-center max-tablet:text-[42px] max-tablet:leading-[92%] text-[65px] font-bold font-display leading-[110%] tracking-[-0.02em] max-w-[776px]"
        }
      >
        Ура! Вы —{" "}
        <span className={"max-tablet:text-white text-[#C5A87E]"}>
          победитель
        </span>{" "}
        Премии 2ГИС 2025
      </h1>
      <div
        className={
          "max-tablet:mt-8 max-tablet:max-w-[309px] max-tablet:text-center max-w-[372px]"
        }
      >
        <p className={"text-base leading-[24px] tracking-[-0.018em]"}>
          В 2ГИС позаботились я о вас и подготовили набор материалов, чтобы Вы с
          легкостью заявляли о своей победе!
        </p>
        <p className={"text-base leading-[24px] tracking-[-0.018em] mt-[25px]"}>
          Делитесь радостной новостью со своими клиентами, используя уже готовые
          материалы!
        </p>
      </div>
    </section>
  );
};
