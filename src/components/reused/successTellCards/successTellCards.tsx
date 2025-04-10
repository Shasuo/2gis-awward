import { Cards } from "@/components/pages/home/sections/tellTheAudience/cards";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const SuccessTellCards = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <Cards
      cards={
        language
          ? [
              {
                href: "/digital-mockups#publication-topics",
                text: "Темы публикаций",
                img: "digstickers-0.png",
              },
              {
                href: "/digital-mockups#digital-stickers",
                text: "Диджитал-стикеры",
                img: "digstickers.webp",
              },
              {
                href: "/digital-mockups#winner-card",
                text: "Открытка победителя",
                img: "digstickers-2.png",
                mobilePlusHeight: true,
              },
            ]
          : [
              {
                href: "/digital-mockups#publication-topics",
                text: "Жарияланымдар  тақырыптары",
                img: "digstickers-0.png",
              },
              {
                href: "/digital-mockups#digital-stickers",
                text: "Диджитал-стикерлер",
                img: "digstickers.webp",
              },
              {
                href: "/digital-mockups#winner-card",
                text: "Жеңімпаздың  ашықхаты",
                img: "digstickers-2.png",
                mobilePlusHeight: true,
              },
            ]
      }
    />
  );
};
