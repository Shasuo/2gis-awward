import React, { useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { TextModule } from "@/components/texts/textModule";

type OptionType = {
  value: string;
  label: string;
};

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

// Стили
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
    width: 456,
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
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#39455B"
      : state.isFocused
        ? "rgba(57,69,91,0.26)"
        : undefined,
    color: "white",
    borderRadius: "12px",
    fontSize: 13,
    lineHeight: "19px",
    letterSpacing: "-0.018em",
    cursor: "pointer",
  }),
};

const options: OptionType[] = [
  { value: "option1", label: "Первый вариант" },
  { value: "option2", label: "Второй вариант" },
  { value: "option3", label: "Третий вариант" },
];

export const ChoosingAnOrganization = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <div className={"max-w-[456] ml-[24]"}>
      <TextModule
        text={"Введите название организации"}
        font_size={20}
        line_height={"28%"}
        letter_spacing={-0.023}
      />
      <Select
        value={selectedOption}
        onChange={(option) => setSelectedOption(option as OptionType)}
        options={options}
        styles={customStyles}
        placeholder="Ромашка, кафе"
        isSearchable
        className={"mt-8 w-full"}
        components={{ DropdownIndicator }}
        noOptionsMessage={() => "Ничего не найдено"}
      />
    </div>
  );
};
