import { DropDown as DownDrop } from "@/components/pages/digital/sections/createPost/drops/dropDown/dropDown";

export interface DropDownProps {
  title: string;
  text: string;
}

const dropsContent: DropDownProps[] = [
  {
    title: "«История успеха: как мы получили Премию 2ГИС»",
    text: "Рассказ о пути компании, развитии и том, что привело к признанию.",
  },
  {
    title:
      "«Что говорят о нас клиенты? Отзывы, которые принесли нам Премию 2ГИС»",
    text: "Подборка реальных отзывов, которые помогли завоевать награду.",
  },
  {
    title: "«За что нас любят? Секрет нашего успеха с Премией 2ГИС»",
    text: "Пост о ценностях бизнеса, подходе к сервису или продукту, который сделал его лучшим.",
  },
];

export const Drops = () => {
  return (
    <div
      className={
        "max-tablet:mx-auto max-tablet:max-w-[344px] max-tablet:mt-6 mt-[61] max-w-[553] w-[553]"
      }
    >
      {dropsContent.map((content: DropDownProps, index: number) => (
        <DownDrop key={index} content={content} />
      ))}
    </div>
  );
};
