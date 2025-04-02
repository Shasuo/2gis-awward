import { TextModule } from "@/components/texts/textModule";
import { Dispatch, useState } from "react";

export const PictureResolutionControl = ({
  setSize,
  size,
}: {
  setSize: Dispatch<any>;
  size: string;
}) => {
  return (
    <div className={"mt-6"}>
      <div className={"cursor-pointer"} onClick={() => setSize("PICTURE")}>
        <TextModule
          text={"Картинка 1080х1080"}
          display
          bold={size === "PICTURE"}
          text_color={size === "PICTURE" ? "#D1AC77" : "#B7BBC3"}
          line_height={"130%"}
          letter_spacing={"-0.015"}
          font_size={24}
        />
      </div>
      <div className={"cursor-pointer"} onClick={() => setSize("VIDEO")}>
        <TextModule
          text={"Видео 1920х1080"}
          display
          bold={size === "VIDEO"}
          text_color={size === "VIDEO" ? "#D1AC77" : "#B7BBC3"}
          line_height={"130%"}
          letter_spacing={"-0.015"}
          font_size={24}
          margin_top={12}
        />
      </div>
    </div>
  );
};
