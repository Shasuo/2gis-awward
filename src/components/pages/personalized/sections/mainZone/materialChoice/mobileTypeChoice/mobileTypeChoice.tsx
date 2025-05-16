import {
  MaterialChoiceButtons,
  MaterialChoiceButtons__KZ,
} from "@/components/pages/personalized/sections/mainZone/materialChoice/choice/choice";
import { Button } from "@/components/pages/personalized/sections/mainZone/materialChoice/materials/mobileChoice/button";
import { useAtom } from "jotai/index";
import { languageRuAtom, materialSizesAtom } from "@/atoms/atoms";

export const MobileTypeChoice = () => {
  const [activeMaterial, setActiveMaterial] = useAtom(materialSizesAtom);
  const language = useAtom(languageRuAtom)[0];
  let data = MaterialChoiceButtons;
  if (!language) {
    data = MaterialChoiceButtons__KZ;
  }
  return (
    <div className={"max-tablet:flex ml-6 hidden mt-10 gap-1"}>
      {data.map((size, index: number) => (
        <Button
          key={index}
          activeMaterial={activeMaterial}
          setActiveMaterial={setActiveMaterial}
          type={size.type}
          title={size.title}
        />
      ))}
    </div>
  );
};
