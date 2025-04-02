import { TextModule } from "@/components/texts/textModule";
import { DownloadButtons } from "@/components/pages/home/sections/becomeMoreVisible/downloadButtons";
import { Card } from "@/components/pages/home/sections/tellTheAudience/card";

export const SliderDownloadMaterials = () => {
  return (
    <div className={"mt-[26] flex justify-between"}>
      <div
        className={`p-[36] box-border w-[744] h-[408] bg-[#364463] rounded-[16] flex`}
        style={{
          flexDirection: "column",
        }}
      >
        <div
          className={"rounded-[12] box-border h-10 px-[15] py-2 w-fit"}
          style={{ border: "1px solid white" }}
        >
          <TextModule
            text={"Печать"}
            font_size={16}
            line_height={"24px"}
            letter_spacing={"-0.018em"}
            margin_top={-1}
          />
        </div>
        <TextModule
          text={"Офлайн-стикеры"}
          font_size={24}
          line_height={"130%"}
          letter_spacing={"-0.015em"}
          display
          as={"h4"}
          margin_top={24}
        />
        <DownloadButtons />
      </div>
      <Card img={"check.webp"} text={"Текст на чеке"} href={"#"} />
    </div>
  );
};
