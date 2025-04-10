import { DropDown as DownDrop } from "@/components/pages/digital/sections/createPost/drops/dropDown/dropDown";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export interface DropDownProps {
  title: string;
  text: string;
}

const dropsContentReturn = (lang: boolean) => {
  const dropsContent: DropDownProps[] = lang
    ? [
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
      ]
    : [
        {
          title: "«Жетістік тарихы: 2GIS Awards-ты қалай алдық»",
          text: "Компанияның жолы, дамуы және танылуына не әкелгені туралы әңгіме.",
        },
        {
          title:
            " «Клиенттер біз туралы не дейді? Бізге 2GIS Awards-ты алып берген пікірлер» ",
          text: "Марапатқа ие болуға көмектескен шынайы пікірлер топтамасы.",
        },
        {
          title:
            "«Бізді не үшін жақсы көреді? 2GIS Awards-ты алудағы жетістігіміздің құпиясы» ",
          text: "Бизнес құндылықтары, сервиске немесе өнімге деген көзқарас бұл бизнесті үздік еткен жол туралы пост.",
        },
      ];
  return dropsContent;
};

export const Drops = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={
        "max-tablet:mx-auto max-tablet:max-w-[344px] max-tablet:mt-6 mt-[61] max-w-[553] w-[553]"
      }
    >
      {dropsContentReturn(language).map(
        (content: DropDownProps, index: number) => (
          <DownDrop key={index} content={content} />
        ),
      )}
    </div>
  );
};
