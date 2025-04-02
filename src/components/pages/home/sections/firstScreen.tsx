import { TextModule } from "@/components/texts/textModule";

export const FirstScreen = () => {
  return (
    <section className={"mt-[142px] flex items-start justify-between"}>
      <TextModule
        text={
          "Ура! Вы — <span style='color: #C5A87E'>победитель</span> Премии 2ГИС 2025"
        }
        as={"h1"}
        bold
        line_height={"110%"}
        font_size={65}
        display
        max_width={776}
      />
      <div className={"max-w-[350]"}>
        <TextModule
          text={
            "В 2ГИС позаботились я о вас и подготовили набор материалов, чтобы Вы с легкостью заявляли о своей победе!"
          }
          as={"p"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
        />
        <TextModule
          text={
            "Поделитесь радостной новостью со своими клиентами с готовыми материалами"
          }
          as={"p"}
          font_size={16}
          margin_top={25}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
        />
      </div>
    </section>
  );
};
