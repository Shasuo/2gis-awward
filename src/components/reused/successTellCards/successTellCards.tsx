import { Cards } from "@/components/pages/home/sections/tellTheAudience/cards";

export const SuccessTellCards = () => {
  return (
    <Cards
      cards={[
        { href: "/digital", text: "Темы публикаций", img: "" },
        { href: "/digital", text: "Диджитал-стикеры", img: "digstickers.webp" },
        {
          href: "/digital",
          text: "Открытка победителя",
          img: "",
          mobilePlusHeight: true,
        },
      ]}
    />
  );
};
