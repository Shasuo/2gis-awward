import { TextModule } from "@/components/texts/textModule";

export const Breadcrumbs = ({
  mt,
  pageName,
}: {
  mt?: number;
  pageName: string;
}) => {
  return (
    <div className={"flex"} style={{ marginTop: mt }}>
      <TextModule
        text={"Главная"}
        font_size={16}
        line_height={"24px"}
        letter_spacing={"-0.018em"}
        opacity={0.6}
      />
      <TextModule
        text={"/"}
        font_size={16}
        line_height={"24px"}
        letter_spacing={"-0.018em"}
        margin_right={15}
        margin_left={15}
      />
      <TextModule
        text={pageName}
        font_size={16}
        line_height={"24px"}
        letter_spacing={"-0.018em"}
      />
    </div>
  );
};
