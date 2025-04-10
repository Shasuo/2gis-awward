import React from "react";
import Select, { components, StylesConfig } from "react-select";
import {
  cityAtom,
  languageRuAtom,
  OptionType,
  organizationAtom,
} from "@/atoms/atoms";
import { useAtom } from "jotai";

const DropdownIndicator = (props: any) => {
  // @ts-ignore
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transform: props.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
          transition: "transform 0.2s ease",
        }}
      >
        <path
          d="M7 10L12 15L17 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </components.DropdownIndicator>
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
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.5)",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "16px",
    marginTop: "8px",
    background: "#233149",
    padding: 16,
    zIndex: 13,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "rgba(57,69,91,0.26)"
      : state.isFocused
        ? "#39455B"
        : undefined,
    color: "white",
    borderRadius: "12px",
    fontSize: 13,
    lineHeight: "19px",
    letterSpacing: "-0.018em",
    cursor: "pointer",
  }),
};

export const CitySelection = ({
  isActive,
  cities,
}: {
  isActive?: boolean;
  cities: OptionType[];
}) => {
  const language = useAtom(languageRuAtom)[0];
  const [selectedOption, setSelectedOption] = useAtom(cityAtom);
  const setOrganization = useAtom(organizationAtom)[1];

  return (
    <div
      className={`${isActive ? "max-tablet:max-w-[unset]" : "max-tablet:max-w-[265]"}`}
    >
      <span
        className={
          "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] block text-[20px] leading-[130%] tracking-[-0.023em]"
        }
      >
        {language ? "Выберите город" : "Қаланы таңдаңыз "}
      </span>
      <Select
        value={selectedOption}
        onChange={(option) => {
          setSelectedOption(option as OptionType);
          setOrganization(null);
        }}
        options={cities}
        styles={customStyles}
        placeholder="Москва"
        isSearchable
        className={`${isActive ? "max-tablet:w-full max-tablet:max-w-[unset]" : "max-tablet:w-[258] max-tablet:max-w-[258]"} max-tablet:mt-2 mt-4 w-[265px]`}
        components={{ DropdownIndicator }}
        noOptionsMessage={() => "Ничего не найдено"}
      />
    </div>
  );
};
