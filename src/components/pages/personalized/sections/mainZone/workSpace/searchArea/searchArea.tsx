import { CitySelection } from "@/components/pages/personalized/sections/mainZone/workSpace/searchArea/citySelection/citySelection";
import { ChoosingAnOrganization } from "@/components/pages/personalized/sections/mainZone/workSpace/searchArea/choosingAnOrganization/choosingAnOrganization";

export const SearchArea = () => {
  return (
    <section className={"mt-[62] flex items-start mx-auto w-fit"}>
      <CitySelection />
      <ChoosingAnOrganization />
    </section>
  );
};
