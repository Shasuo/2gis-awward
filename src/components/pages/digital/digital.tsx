import { Breadcrumbs } from "@/components/reused/breadcrumbs/breadcrumbs";
import { FirstScreen } from "@/components/pages/digital/sections/firstScreen";
import { Footer } from "@/layout/footer/footer";
import { CreatePost } from "@/components/pages/digital/sections/createPost/createPost";
import { MorePublications } from "@/components/pages/digital/sections/morePublications/morePublications";
import { AwardStickers } from "@/components/pages/digital/sections/awardStickers/awardStickers";
import { ReadyPicture } from "@/components/pages/digital/sections/readyPicture/readyPicture";
import { AnyQuestions } from "@/components/pages/home/sections/anyQuestions";
import { WhatNext } from "@/components/pages/digital/sections/whatNext/whatNext";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { TagUs_text } from "@/components/reused/tagUs_text/tagUs_text";
import { StickersInstructions } from "@/layout/modals/stickersInstructions/stickersInstructions";
import React from "react";

export const Digital = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <>
      <StickersInstructions />
      <main className={"max-tablet:mt-[60] mt-[84]"}>
        <Breadcrumbs
          pageName={language ? "Диджитал-макеты" : "Диджитал-макеты"}
        />
        <FirstScreen />
        <CreatePost />
        <MorePublications />
        <AwardStickers />
        <ReadyPicture />

        <WhatNext />
        <div className={"max-tablet:mt-[80] mt-[135px]"}>
          <TagUs_text />
        </div>
        <div className={"mt-[113]"}>
          <AnyQuestions />
        </div>
        <Footer />
      </main>
    </>
  );
};
