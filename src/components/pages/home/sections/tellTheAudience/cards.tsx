import { Card } from "@/components/pages/home/sections/tellTheAudience/card";

export interface CardProps {
  href: string;
  img: string;
  text: string;
  mobilePlusHeight?: boolean;
  blank?: boolean;
  metrikaName: string;
  hover: "zoom" | "bg";
}
export const Cards = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div
      className={
        "max-tablet:space-y-2 max-tablet:mx-auto max-tablet:max-w-[344px] max-tablet:block max-tablet:mt-[40] mt-[53] flex items-start justify-between"
      }
    >
      {cards.map((el: CardProps, index: number) => (
        <Card
          key={index}
          href={el.href}
          text={el.text}
          img={el.img}
          mobilePlusHeight={el.mobilePlusHeight}
          metrikaName={el.metrikaName}
          hover={el.hover}
        />
      ))}
    </div>
  );
};
