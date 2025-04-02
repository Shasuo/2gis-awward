import { Breadcrumbs } from "@/components/reused/breadcrumbs/breadcrumbs";
import { FirstScreen } from "@/components/pages/personalized/sections/firstScreen";
import { MainZone } from "@/components/pages/personalized/sections/mainZone/mainZone";
import { ReadyMadeTexts } from "@/components/pages/personalized/sections/readyMadeTexts/readyMadeTexts";
import { WhatNext } from "@/components/pages/personalized/sections/whatNext/whatNext";
import { Footer } from "@/layout/footer/footer";
import { AnyQuestions } from "@/components/pages/home/sections/anyQuestions";

export const Personalized = () => {
  return (
    <>
      <main className={"mt-[84]"}>
        <Breadcrumbs pageName={"Персонализированные материалы"} />
        <FirstScreen />
        <MainZone />
        <ReadyMadeTexts />
      </main>
      <section
        className={"bg-[#0C132D] mt-[229]"}
        style={{ borderRadius: "32px 32px 0 0" }}
      >
        <main className={"pt-[133]"}>
          <WhatNext />
          <div className={"mt-[113]"}>
            <AnyQuestions />
          </div>
          <Footer />
        </main>
      </section>
    </>
  );
};
