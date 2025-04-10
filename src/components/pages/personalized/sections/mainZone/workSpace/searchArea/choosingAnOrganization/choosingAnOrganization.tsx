import React from "react";
import Select, { ClearIndicatorProps, StylesConfig } from "react-select";
import { ICONS_PATH } from "@/components/paths/paths";
import {
  cityAtom,
  languageRuAtom,
  OptionType,
  organizationAtom,
} from "@/atoms/atoms";
import { useAtom } from "jotai";
import Image from "next/image";

interface firmsListProps {
  value: string;
  label: string;
  id: number;
  name: string;
  guid: string;
  addr: string;
  nomination: string;
  name_kz?: string;
  nomination_kz?: string;
}

const ClearIndicator = (props: ClearIndicatorProps<OptionType, false>) => {
  return (
    <div
      style={{
        cursor: "pointer",
        padding: "0 8px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        props.clearValue();
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.clearValue();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  );
};

const Search = () => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    content: '""',
    opacity: 0.7,
    display: "inline-block",
    width: 24,
    height: 24,
    backgroundImage: `url(${ICONS_PATH}/search.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: 4,
  },
});

const CustomOption = ({ innerProps, data, isFocused, isSelected }: any) => {
  return (
    <div
      {...innerProps}
      style={{
        backgroundColor: isSelected
          ? "rgba(57,69,91,0.26)"
          : isFocused
            ? "#39455B"
            : undefined,
        color: "white",
        borderRadius: "12px",
        fontSize: 13,
        lineHeight: "19px",
        letterSpacing: "-0.018em",
        cursor: "pointer",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 className="text-base leading-6 tracking-[-0.018em] opacity-80">
        {data.label}
      </h3>
      <p className="mt-[2] text-[13px] leading-[19px] tracking-[-0.018em] opacity-60">
        {data.addr}
      </p>
    </div>
  );
};

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    borderRadius: "16px",
    border: "none",
    boxShadow: "none",
    background: "#233149",
    color: "white",
    height: 48,
    fontSize: 13,
    lineHeight: "19px",
    letterSpacing: "-0.013em",
    paddingTop: 0,
    paddingLeft: 8,
    paddingRight: 8,
    width: "100%",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    opacity: 0,
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: "white",
    fontSize: 13,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    paddingLeft: 24,
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    paddingLeft: 24,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.5)",
    paddingLeft: 24,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "16px",
    marginTop: "8px",
    background: "#233149",
    padding: 16,
    zIndex: 10,
  }),
};

export const ChoosingAnOrganization = ({
  isActive,
  allWinners,
}: {
  isActive?: boolean;
  allWinners: any[];
}) => {
  const language = useAtom(languageRuAtom)[0];
  const cityOption = useAtom(cityAtom)[0];

  let options: firmsListProps[] = [];
  let object;
  if (cityOption) {
    object = allWinners.find((item) => item.project === cityOption.label);
    options = object.firms.map((item: any) => {
      return { ...item, value: item.name, label: item.name, guid: item.guid };
    });
  }
  const [selectedOption, setSelectedOption] = useAtom(organizationAtom);

  return (
    <div
      className={`${isActive ? "max-tablet:max-w-[unset]" : "max-tablet:max-w-[265]"} max-tablet:mt-6 max-tablet:ml-0 max-w-[456]`}
    >
      <span
        className={
          "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] block text-[20px] leading-[130%] tracking-[-0.023em]"
        }
      >
        {language ? "Введите название организации" : "Ұйым атауын енгізіңіз"}
      </span>

      <div className={"relative"}>
        <Image
          src={`${ICONS_PATH}/search.svg`}
          alt={"Искать"}
          width={24}
          height={24}
          className={"absolute left-[16] top-[12] z-10"}
        />
        <Select
          value={selectedOption}
          onChange={(option) => setSelectedOption(option as OptionType)}
          options={options}
          isClearable
          styles={customStyles}
          placeholder="Ромашка, кафе"
          isSearchable
          className={`${isActive ? "max-tablet:w-full max-tablet:max-w-[unset]" : "max-tablet:w-[258] max-tablet:max-w-[258]"} max-tablet:mt-2 mt-4 w-[456px]`}
          components={{
            ClearIndicator,
            Option: CustomOption,
          }}
          noOptionsMessage={() => "Ничего не найдено"}
        />
      </div>
    </div>
  );
};
