import { FirstScreen } from "./firstScreen/firstScreen";
import { Steps } from "./steps/steps";
import { Offers } from "./offers/offers";
import { IMAGES_PATH } from "@/components/paths/paths";

import styles from "./bigPopup.module.css";
import { mainModalAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";

export const BigPopup = () => {
  const setMainModal = useAtom(mainModalAtom)[1];
  return (
    <div
      className={
        "max-tablet:px-6 max-tablet:py-[60px] max-tablet:max-w-[375px] max-tablet:w-full mt-[120px] p-[120px] bg-[#0C132D] box-border rounded-[32px] relative"
      }
    > <div 
    className={styles.x_close_icon}><img src={`${IMAGES_PATH}/big_popup_close_mark.png`}
    onClick={() => setMainModal(null)}
    /></div>
      <FirstScreen />
      <Steps />
      <Offers />
    </div>
  );
};
