import { TextModule } from "@/components/texts/textModule";

export const FirstScreen = () => {
  return (
    <section className={"mt-8 flex items-start"}>
      <TextModule
        text={"Продолжайте рассказывать аудитории о своем успехе"}
        max_width={639}
        display
        font_size={54}
        line_height={"92%"}
        letter_spacing={"-0.02em"}
        as={"h1"}
      />
      <TextModule
        text={
          "Мы подготовили всё, чтобы вы без особых затрат рассказали о своей победе и сбрали для вас набор персонализированных визуалов и текстов для Ваших социальных сетей"
        }
        margin_left={128}
        max_width={324}
        font_size={16}
        line_height={"24px"}
        letter_spacing={"-0.018em"}
        as={"p"}
      />
    </section>
  );
};
