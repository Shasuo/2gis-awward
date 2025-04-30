import { Cards } from "@/components/pages/home/sections/tellTheAudience/cards";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const SuccessTellCards = ({
  materialsPage,
}: {
  materialsPage?: boolean;
}) => {
  const language = useAtom(languageRuAtom)[0];
  const metrikaName = "social_networks";
  return (
    <Cards
      cards={
        language
          ? [
              {
                href: "/digital-mockups#publication-topics",
                text: "Темы публикаций",
                img: "digstickers-0.png",
                metrikaName: materialsPage ? "publication_topics" : metrikaName,
                hover: "bg",
              },
              {
                href: "/digital-mockups#digital-stickers",
                text: "Диджитал-стикеры",
                img: "digstickers.webp",
                metrikaName: materialsPage ? "digital_stickers" : metrikaName,
                hover: "zoom",
              },
              {
                href: "/digital-mockups#winner-card",
                text: "Открытка победителя",
                img: "digstickers-2.png",
                mobilePlusHeight: true,
                metrikaName: materialsPage ? "winner_postcard" : metrikaName,
                hover: "bg",
              },
            ]
          : [
              {
                href: "/digital-mockups#publication-topics",
                text: "Жарияланымдар  тақырыптары",
                img: "digstickers-0.png",
                metrikaName: materialsPage ? "publication_topics" : metrikaName,
                hover: "bg",
              },
              {
                href: "/digital-mockups#digital-stickers",
                text: "Диджитал-стикерлер",
                img: "digstickers.webp",
                metrikaName: materialsPage ? "digital_stickers" : metrikaName,
                hover: "zoom",
              },
              {
                href: "/digital-mockups#winner-card",
                text: "Жеңімпаздың  ашықхаты",
                img: "digstickers-2.png",
                mobilePlusHeight: true,
                metrikaName: materialsPage ? "winner_postcard" : metrikaName,
                hover: "bg",
              },
            ]
      }
    />
  );
};
