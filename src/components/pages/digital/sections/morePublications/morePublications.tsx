import { TextModule } from "@/components/texts/textModule";
import { Button } from "@/components/pages/digital/sections/morePublications/button/button";

const buttons = ["#премия2ГИС", "#2GISawards"];
export const MorePublications = () => {
  return (
    <section
      className={
        "p-12 rounded-[16] box-border flex items-center justify-between mt-[100]"
      }
      style={{ border: "1px solid #4E5E7F" }}
    >
      <TextModule
        text={"Еще больше публикаций ищите в соц-сетях по хештегам"}
        font_size={24}
        display
        line_height={"130%"}
        letter_spacing={"0.015em"}
        max_width={390}
      />
      <div className={"flex gap-2"}>
        {buttons.map((buttonText, index) => (
          <Button buttonText={buttonText} key={index} />
        ))}
      </div>
    </section>
  );
};
