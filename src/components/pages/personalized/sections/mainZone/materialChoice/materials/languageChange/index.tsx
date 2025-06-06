import { languageRuAtom, materialSizesAtom } from "@/atoms/atoms";
import { useAtom } from "jotai/index";

interface LangButtonProps {
  ru: boolean;
  active: boolean;
  position: boolean;
}

export const LanguageChange = () => {
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);
  const language = useAtom(languageRuAtom)[0];

  const handleLangSet = (ru: boolean) =>
    setActiveMaterial({ ...activeMaterial, ru: ru });

  const LangButton = ({ ru, active, position }: LangButtonProps) => (
    <div
      className={`${active ? "max-tablet:font-bold" : ""} max-tablet:w-12 max-tablet:flex max-tablet:justify-center cursor-pointer`}
      onClick={() => handleLangSet(ru)}
      style={{ opacity: active ? undefined : 0.5, order: position ? 0 : 2 }}
    >
      {ru ? "Ру" : "Kz"}
    </div>
  );

  return (
    <div className="mt-9 text-base leading-6 tracking-[-0.018em] flex items-center">
      <LangButton ru={true} active={activeMaterial.ru} position={language} />
      <div className="max-tablet:mx-2 mx-[10px] opacity-50 order-[1]">|</div>
      <LangButton ru={false} active={!activeMaterial.ru} position={!language} />
    </div>
  );
};
