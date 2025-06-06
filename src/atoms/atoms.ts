import { atom } from "jotai";
import { mainMaterialInterface } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";

export type OptionType = {
  value: string;
  label: string;
  guid?: string;
};

interface MaterialsData {
  id: number;
  title: string;
  platform: string;
  width: number;
  height: number;
  video: boolean;
  archive: boolean;
  link: string;
  ln?: "ru" | "kz";
}

/******* Глобальные состояния городов и списков победителей ___ START ___ *******/

export const organizationAtom = atom<OptionType | null>();
export const cityAtom = atom<OptionType | null>();

/******* Глобальные состояния городов и списков победителей ___ END _____ *******/

/******* Глобальное состояние выбранного размера персонализированных материалов ___ START ___ *******/

export const materialSizesAtom = atom<mainMaterialInterface>({
  type: "IMAGE",
  sizes: { width: 1080, height: 1080 },
  ru: true,
});
/******* Глобальное состояние выбранного размера персонализированных материалов ___ END _____ *******/

/******* Данные материалов с сервера ___ START ___ *******/

export const materialsDataAtom = atom<MaterialsData[]>([]);
/******* Данные материалов с сервера ___ END _____ *******/

/******* Глобальное модальное состояние ___ START ___ *******/

export const mainModalAtom = atom<string | null>(null);
/******* Глобальное модальное состояние ___ END _____ *******/

/******* Глобальное состояние языка ___ START ___ *******/

export const languageRuAtom = atom<boolean>(true);
/******* Глобальное состояние языка ___ END _____ *******/
