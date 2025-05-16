import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";
import { SearchArea } from "@/components/pages/personalized/sections/mainZone/workSpace/searchArea/searchArea";
import { MaterialChoice } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";
import { useAtom } from "jotai";
import {
  cityAtom,
  languageRuAtom,
  materialsDataAtom,
  OptionType,
  organizationAtom,
} from "@/atoms/atoms";
import { MobileTypeChoice } from "@/components/pages/personalized/sections/mainZone/materialChoice/mobileTypeChoice/mobileTypeChoice";
import { useEffect, useState } from "react";

const fetchWinItems = async (userId: string): Promise<any> => {
  try {
    const response = await fetch(`/api/getWinner?id=${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return new Promise((resolve) => {
      resolve(data);
    });
  } catch (error) {
    console.error("Error fetching win items:", error);
  }
};

export const MainZone = ({
  cities,
  allWinners,
}: {
  cities: OptionType[];
  allWinners: any[];
}) => {
  const language = useAtom(languageRuAtom)[0];
  const CityAtom = useAtom(cityAtom)[0];
  const OrganizationAtom = useAtom(organizationAtom)[0];
  const setMaterialsData = useAtom(materialsDataAtom)[1];
  const [loading, setLoading] = useState<"success" | "error" | "initial">(
    "initial",
  );
  useEffect(() => {
    if (CityAtom && OrganizationAtom) {
      const fetchData = async () => {
        try {
          setLoading("initial");
          if (OrganizationAtom.guid) {
            const materialsData = await fetchWinItems(OrganizationAtom.guid);
            if (materialsData) {
              setMaterialsData(materialsData.files);
              setLoading("success");
            } else {
              setLoading("error");
            }
          } else {
            setLoading("error");
          }
        } catch (error) {
          console.error("Ошибка запроса", error);
          setLoading("error");
        }
      };

      fetchData();
    }
  }, [CityAtom, OrganizationAtom]);

  if (CityAtom && OrganizationAtom) {
    return (
      <div className={"max-tablet:mt-[80] mt-[105]"}>
        <SearchArea isActive cities={cities} allWinners={allWinners} />

        {loading === "initial" ? (
          <div
            className={
              "bg-[#233149] flex items-center h-[400] rounded-[32] mt-[30]"
            }
          >
            <div className={"preloader w-fit mx-auto mt-6"}></div>
          </div>
        ) : loading === "success" ? (
          <>
            <MobileTypeChoice />
            <MaterialChoice />
          </>
        ) : (
          <div
            className={
              "bg-[#233149] flex items-center justify-center h-[400] rounded-[32] mt-[30]"
            }
          >
            Ошибка, попробуйте снова
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={
          "max-tablet:mx-auto max-tablet:h-[934] max-tablet:max-w-[344] max-tablet:mt-[80] mt-[105] box-border rounded-[32] h-[769] relative select-none"
        }
        style={{ border: "1px solid white" }}
      >
        <Image
          src={`${IMAGES_PATH}/mainAreaPlaceholder.webp`}
          alt={"Открытки (демо)"}
          width={1128}
          height={771}
          className={
            "max-tablet:hidden absolute left-0 top-0 rounded-[32] z-[-1]"
          }
        />
        <Image
          src={`${IMAGES_PATH}/mainAreaPlaceholder__mobile.webp`}
          alt={"Открытки (демо)"}
          width={344}
          height={934}
          className={
            "max-tablet:block absolute left-0 top-0 rounded-[32] z-[-1] hidden"
          }
        />
        <div
          className={
            "max-tablet:max-w-[258px] max-tablet:left-6 max-tablet:top-10 absolute left-0 top-[72] w-full"
          }
        >
          <div
            className={
              "max-tablet:w-[unset] max-tablet:mx-[unset] mx-auto w-fit"
            }
          >
            <h3
              className={
                "max-tablet:text-left max-tablet:text-[18px] max-tablet:leading-6 max-tablet:tracking-[-0.018em] font-bold text-[32px] leading-10 tracking-[-0.016em] text-center max-w-[792px]"
              }
            >
              {language ? (
                <>
                  Чтобы получить персонализированные открытки,{" "}
                  <span style={{ color: "#C5A87E" }}>
                    выберите свою компанию
                  </span>{" "}
                  <br />в 2ГИС из списка
                </>
              ) : (
                "Жекелендірілген ашықхаттарды алу үшін компанияңызды 2GIS-тегі тізімнен таңдаңыз"
              )}
            </h3>

            <SearchArea cities={cities} allWinners={allWinners} />
          </div>
        </div>
      </div>
    );
  }
};
