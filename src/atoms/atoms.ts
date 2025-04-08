import { atom } from "jotai";
import { mainMaterialInterface } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";

export type OptionType = {
  value: string;
  label: string;
};

/******* Глобальные состояния городов и списков победителей ___ START ___ *******/

export const organizationAtom = atom<OptionType | null>();
export const cityAtom = atom<OptionType | null>();

/******* Глобальные состояния городов и списков победителей ___ END _____ *******/

/******* Глобальное состояние выбранного размера персонализированных материалов ___ START ___ *******/

export const materialSizesAtom = atom<mainMaterialInterface>({
  type: "IMAGE",
  sizes: { width: 1080, height: 1080 },
});
/******* Глобальное состояние выбранного размера персонализированных материалов ___ END _____ *******/
