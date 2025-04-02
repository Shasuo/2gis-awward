import { Card } from "@/components/pages/home/sections/tellTheAudience/card";

export interface CardProps {
  href: string;
  img: string;
  text: string;
}
export const Cards = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className={"mt-[53] flex items-start justify-between"}>
      {cards.map((el: CardProps, index: number) => (
        <Card key={index} href={el.href} text={el.text} img={el.img} />
      ))}
    </div>
  );
};
