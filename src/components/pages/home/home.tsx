import { FirstScreen } from "./sections/firstScreen";
import { ViewMaterials } from "./sections/viewMaterials";
import { TellTheAudience } from "./sections/tellTheAudience/tellTheAudience";
import { BecomeMoreVisible } from "./sections/becomeMoreVisible/becomeMoreVisible";
import { TagUs } from "./sections/tagUs/tagUs";
import { AnyQuestions } from "@/components/pages/home/sections/anyQuestions";
import { Footer } from "@/layout/footer/footer";

export const HomePage = () => {
  return (
    <main>
      <FirstScreen />
      <ViewMaterials />
      <TellTheAudience />
      <BecomeMoreVisible />
      <TagUs />
      <div className={"mt-[688]"}>
        <AnyQuestions />
      </div>

      <Footer />
    </main>
  );
};
