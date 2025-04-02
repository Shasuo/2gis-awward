import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";

export const AnyQuestions = () => {
  return (
    <section
      className={
        "box-border py-11 px-12 flex items-center justify-between rounded-[16] relative z-10 max-w-[936] mx-auto"
      }
      style={{ border: "1px solid #8A9FC4" }}
    >
      <TextModule
        text={"Если остались вопросы или хотите что-то обсудить"}
        as={"h2"}
        font_size={32}
        line_height={"40px"}
        letter_spacing={"-0.016em"}
        max_width={490}
      />
      <Link
        href={"#"}
        className={
          "bg-white text-[#0C132D] box-border block py-[18] px-[64] rounded-[8]"
        }
      >
        <TextModule
          text={"Задать вопрос"}
          as={"span"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
        />
      </Link>
    </section>
  );
};
