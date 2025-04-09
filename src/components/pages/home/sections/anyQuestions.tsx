import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import { mainModalAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";

export const AnyQuestions = () => {
  const setMainModal = useAtom(mainModalAtom)[1];
  return (
    <section
      className={
        "max-tablet:max-w-[344] max-tablet:block box-border py-11 px-12 flex items-center justify-between rounded-[16] relative z-10 max-w-[936] mx-auto"
      }
      style={{ border: "1px solid #8A9FC4" }}
    >
      <h2
        className={
          "max-tablet:mx-auto max-tablet:max-w-[236px] max-tablet:text-[24px] max-tablet:leading-[130%] text-[32px] leading-10 tracking-[-0.016em] max-w-[490px]"
        }
      >
        Если остались вопросы или хотите что-то обсудить
      </h2>
      <div
        className={
          "cursor-pointer hover:bg-transparent active::bg-transparent hover:text-white active:text-white max-tablet:mx-auto max-tablet:max-w-[249px] max-tablet:flex max-tablet:justify-center box-border max-tablet:mt-[38px] bg-white text-[#0C132D] box-border block py-[18] px-[64] rounded-[8]"
        }
        style={{ border: "1px solid white" }}
        onClick={() => setMainModal("AnyQuestions")}
      >
        <span
          className={
            "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] text-base leading-6 tracking-[-0.018em]"
          }
        >
          Задать вопрос
        </span>
      </div>
    </section>
  );
};
