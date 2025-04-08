import { CitySelection } from "@/components/pages/personalized/sections/mainZone/workSpace/searchArea/citySelection/citySelection";
import { ChoosingAnOrganization } from "@/components/pages/personalized/sections/mainZone/workSpace/searchArea/choosingAnOrganization/choosingAnOrganization";
import { OptionType } from "@/atoms/atoms";

export const SearchArea = ({
  isActive,
  cities,
  allWinners,
}: {
  isActive?: boolean;
  cities: OptionType[];
  allWinners: any[];
}) => {
  if (!isActive) {
    return (
      <section
        className={
          "max-tablet:w-[unset] max-tablet:mx-[unset] max-tablet:block max-tablet:mt-6 mt-[62] flex items-start mx-auto w-fit gap-6"
        }
      >
        <CitySelection cities={cities} />
        <ChoosingAnOrganization allWinners={allWinners} />
      </section>
    );
  } else {
    return (
      <section
        className={
          "max-tablet:mr-9 max-tablet:ml-9 max-tablet:w-[unset] max-tablet:mx-[unset] max-tablet:block flex items-start w-fit gap-[119]"
        }
      >
        <CitySelection isActive cities={cities} />
        <ChoosingAnOrganization isActive allWinners={allWinners} />
      </section>
    );
  }
};
