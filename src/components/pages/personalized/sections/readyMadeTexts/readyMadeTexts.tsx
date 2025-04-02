import { TextModule } from "@/components/texts/textModule";
import { Texts } from "@/components/pages/personalized/sections/readyMadeTexts/texts/texts";

export const ReadyMadeTexts = () => {
  return (
    <section className={"mt-[130] flex items-start justify-between"}>
      <div>
        <TextModule
          text={"Готовые тексты"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"h3"}
        />
        <TextModule
          text={
            "Используйте <span style='color: #C5A87E'>готовые тексты</span>, чтобы быстро оформить пост"
          }
          max_width={468}
          font_size={40}
          font_weight={600}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
          as={"h2"}
          margin_top={28}
        />
      </div>
      <Texts />
    </section>
  );
};
