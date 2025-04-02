import { TextModule } from "@/components/texts/textModule";
import { SearchArea } from "@/components/pages/personalized/sections/mainZone/workSpace/searchArea/searchArea";

export const WorkSpace = () => {
  return (
    <div className={"absolute left-0 top-[72] w-full"}>
      <div className={"mx-auto w-fit"}>
        <TextModule
          text={
            "Чтобы получить персонализированные открытки, <span style='color: #C5A87E'>выберите свою компанию</span> <br/>в 2ГИС из списка"
          }
          bold
          font_size={32}
          line_height={"40px"}
          letter_spacing={"-0.016"}
          text_centered
          max_width={792}
          as={"h3"}
        />
        <SearchArea />
      </div>
    </div>
  );
};
