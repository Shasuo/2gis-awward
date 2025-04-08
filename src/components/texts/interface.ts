import { JSX } from "react";

export interface MainTextProps {
  text: string;
  line_height?: number | string;
  letter_spacing?: number | string;
  as?: keyof JSX.IntrinsicElements;
  font_size?: number;
  font_size__mobile?: number;
  max_width?: number | string;
  margin_left?: number;
  margin_right?: number;
  bold?: boolean;
  display?: boolean;
  margin_top?: number | string;
  text_centered?: boolean;
  font_weight?: number;
  text_color?: string;
  opacity?: number;
}
