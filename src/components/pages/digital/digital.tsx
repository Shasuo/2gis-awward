import { Breadcrumbs } from "@/components/reused/breadcrumbs/breadcrumbs";
import { FirstScreen } from "@/components/pages/digital/sections/firstScreen";
import { Footer } from "@/layout/footer/footer";
import { CreatePost } from "@/components/pages/digital/sections/createPost/createPost";
import { MorePublications } from "@/components/pages/digital/sections/morePublications/morePublications";
import { AwardStickers } from "@/components/pages/digital/sections/awardStickers/awardStickers";
import { ReadyPicture } from "@/components/pages/digital/sections/readyPicture/readyPicture";
import { AnyQuestions } from "@/components/pages/home/sections/anyQuestions";
import { WhatNext } from "@/components/pages/digital/sections/whatNext/whatNext";

export const Digital = () => {
  return (
    <main className={"max-tablet:mt-[60] mt-[84]"}>
      <Breadcrumbs pageName={"Диджитал-макеты"} />
      <FirstScreen />
      <CreatePost />
      <MorePublications />
      <AwardStickers />
      <ReadyPicture />

      <WhatNext />
      <div className={"mt-[113]"}>
        <AnyQuestions />
      </div>
      <Footer />
    </main>
  );
};
