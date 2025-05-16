import { Breadcrumbs } from "@/components/reused/breadcrumbs/breadcrumbs";
import { FirstScreen } from "@/components/pages/personalized/sections/firstScreen";
import { MainZone } from "@/components/pages/personalized/sections/mainZone/mainZone";
import { ReadyMadeTexts } from "@/components/pages/personalized/sections/readyMadeTexts/readyMadeTexts";
import { WhatNext } from "@/components/pages/personalized/sections/whatNext/whatNext";
import { Footer } from "@/layout/footer/footer";
import { AnyQuestions } from "@/components/pages/home/sections/anyQuestions";
import { languageRuAtom, OptionType } from "@/atoms/atoms";
import { useAtom } from "jotai/index";
import { TagUs_text } from "@/components/reused/tagUs_text/tagUs_text";

export const Personalized = ({
  cities,
  allWinners,
}: {
  cities: OptionType[];
  allWinners: any[];
}) => {
  const language = useAtom(languageRuAtom)[0];

  return (
    <>
      <main className={"max-tablet:mt-[60] mt-[84]"}>
        <Breadcrumbs
          pageName={
            language
              ? "Персонализированные материалы"
              : "Жекелендірілген материалдар"
          }
        />
        <FirstScreen />
        <MainZone cities={cities} allWinners={allWinners} />
        <ReadyMadeTexts />
      </main>
      <section
        className={
          "max-tablet:mt-0 max-tablet:bg-[transparent] bg-[#0C132D] mt-[229]"
        }
        style={{ borderRadius: "32px 32px 0 0" }}
      >
        <main className={"max-tablet:pt-[80] pt-[133]"}>
          <WhatNext />
          <div className={"max-tablet:mt-[80] mt-[135px]"}>
            <TagUs_text />
          </div>

          <div className={"mt-[113]"}>
            <AnyQuestions />
          </div>
          <Footer />
        </main>
      </section>
    </>
  );
};
