import { TextModule } from "@/components/texts/textModule";
import { Cards } from "./cards";
import { SuccessTellCards } from "@/components/reused/successTellCards/successTellCards";

export const TellTheAudience = () => {
  return (
    <section className={"mt-[68]"}>
      <div
        className={"bg-white px-[15] py-2 rounded-[12px] w-fit text-[#0C132D]"}
      >
        <TextModule
          text={"Шаг 2"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
        />
      </div>
      <div className={"mt-[36] flex items-start"}>
        <TextModule
          text={"Продолжайте рассказывать аудитории о своем успехе"}
          font_size={54}
          line_height={"92%"}
          letter_spacing={"-0.02em"}
          max_width={654}
          display
          as={"h2"}
        />
        <TextModule
          text={
            "Продолжайте рассказывать<br/> аудитории о своем успехе<br/> самостоятельно. "
          }
          as={"p"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          margin_left={114}
        />
      </div>
      <SuccessTellCards />
    </section>
  );
};
