import { FirstScreen } from "./firstScreen/firstScreen";
import { Steps } from "./steps/steps";
import { Offers } from "./offers/offers";

export const BigPopup = () => {
  return (
    <div
      className={
        "max-tablet:px-6 max-tablet:py-[60px] max-tablet:max-w-[375px] max-tablet:w-full mt-[120px] p-[120px] bg-[#0C132D] box-border rounded-[32px]"
      }
    >
      <FirstScreen />
      <Steps />
      <Offers />
    </div>
  );
};
