import { FirstScreen } from "./sections/firstScreen";
import { ViewMaterials } from "./sections/viewMaterials";
import { TellTheAudience } from "./sections/tellTheAudience/tellTheAudience";
import { BecomeMoreVisible } from "./sections/becomeMoreVisible/becomeMoreVisible";
import { TagUs } from "./sections/tagUs/tagUs";
import { AnyQuestions } from "@/components/pages/home/sections/anyQuestions";
import { Footer } from "@/layout/footer/footer";

export const HomePage = () => {
  return (
    <>
      <main>
        <FirstScreen />
      </main>
      <ViewMaterials />
      <main>
        <TellTheAudience />
        <BecomeMoreVisible />
      </main>
      <TagUs />
      <main>
        <div className={"max-tablet:mt-[-80px] mt-[688]"}>
          <AnyQuestions />
        </div>
        <Footer />
      </main>
    </>
  );
};
