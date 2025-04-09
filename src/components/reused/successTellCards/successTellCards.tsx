import { Cards } from "@/components/pages/home/sections/tellTheAudience/cards";

export const SuccessTellCards = () => {
  return (
    <Cards
      cards={[
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
      ]}
    />
  );
};
