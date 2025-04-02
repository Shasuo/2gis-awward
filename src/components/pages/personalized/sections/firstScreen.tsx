import { TextModule } from "@/components/texts/textModule";

export const FirstScreen = () => {
  return (
    <div className={"flex items-start mt-[34]"}>
      <TextModule
        text={"Расскажите о своей победе прямо сейчас"}
        max_width={612}
        display
        font_size={54}
        line_height={"92%"}
        letter_spacing={"-0.02em"}
        as={"h1"}
      />
      <TextModule
        text={
          "Мы подготовили набор текстовых и визуально инструментов, чтобы вы без дополнительных затрат рассказали  клиентам о вашей победе."
        }
        max_width={324}
        display
        font_size={16}
        line_height={"24px"}
        letter_spacing={"-0.018em"}
        margin_left={155}
        as={"p"}
      />
    </div>
  );
};
