import { Cards } from "@/components/pages/home/sections/tellTheAudience/cards";

export const SuccessTellCards = () => {
  return (
    <Cards
      cards={[
        { href: "/digital", text: "Темы публикаций", img: "digstickers-0.png" },
        { href: "/digital", text: "Диджитал-стикеры", img: "digstickers.webp" },
        {
          href: "/digital",
          text: "Открытка победителя",
          img: "digstickers-2.png",
          mobilePlusHeight: true,
        },
      ]}
    />
  );
};
