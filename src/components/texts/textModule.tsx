import { MainTextProps } from "@/components/texts/interface";

export const TextModule = ({
  text,
  line_height,
  letter_spacing,
  as: Tag = "div",
  font_size,
  max_width,
  margin_left,
  margin_right,
  bold,
  display,
  margin_top,
  text_centered,
  font_weight,
  text_color,
  opacity,
  font_size__mobile,
}: MainTextProps) => {
  return (
    <Tag
      className={`${bold ? "font-bold" : ""}`}
      style={{
        lineHeight: line_height ?? "92%",
        letterSpacing: letter_spacing ?? "-0.02em",
        fontSize: font_size ?? 24,
        maxWidth: max_width,
        marginLeft: margin_left,
        marginRight: margin_right,
        fontFamily: display ? "SB-Sans-display" : undefined,
        marginTop: margin_top,
        textAlign: text_centered ? "center" : undefined,
        fontWeight: font_weight,
        color: text_color,
        opacity: opacity,
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
