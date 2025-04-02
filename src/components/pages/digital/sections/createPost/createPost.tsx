import { TextModule } from "@/components/texts/textModule";
import { Drops } from "@/components/pages/digital/sections/createPost/drops/drops";
import { Slider } from "@/components/pages/digital/sections/createPost/slider/slider";

export const CreatePost = () => {
  return (
    <section className={"mt-[192] flex items-start justify-between"}>
      <div>
        <TextModule
          text={"Темы публикаций"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"h4"}
        />
        <TextModule
          text={"Создайте пост"}
          margin_top={15}
          font_size={40}
          line_height={"48px"}
          letter_spacing={"-0.016em"}
          as={"h2"}
          font_weight={600}
        />
        <Drops />
      </div>
      <Slider />
    </section>
  );
};
