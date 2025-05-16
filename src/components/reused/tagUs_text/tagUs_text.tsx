import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const TagUs_text = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={"max-tablet:max-w-[350] mx-auto block w-fit relative z-[3]"}
    >
      <h3
        className={
          "max-tablet:font-normal max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:text-[30px] text-center max-w-[704px] text-[40px] leading-[48px] tracking-[-0.016em] font-semibold"
        }
      >
        {language ? (
          <>
            Делитесь радостной новостью <br />с клиентами и{" "}
            <span style={{ color: "#C5A87E" }}>отмечайте нас</span> <br />в
            социальных сетях
          </>
        ) : (
          <>
            Клиенттермен қуанышты жаңалықпен бөлісіп, бізді әлеуметтік желілерде
            белгілеңіз
          </>
        )}
      </h3>
      <div
        className={
          "max-tablet:block max-tablet:mt-[24] flex mt-[38] mx-auto w-fit"
        }
      >
        <div
          className={
            "max-tablet:mx-auto px-7 pb-[11] pt-[17] box-border rounded-[8]"
          }
          style={{ background: "rgba(138, 159, 196, 0.3)" }}
        >
          <span
            className={
              "max-tablet:tracking-[-0.018em] max-tablet:leading-[24px] max-tablet:text-[18px] text-[24px] leading-[130%] tracking-[-0.015em] font-display"
            }
          >
            #премия2ГИС
          </span>
        </div>
        <div
          className={
            "max-tablet:w-fit max-tablet:mt-2 max-tablet:ml-auto max-tablet:mr-auto max-tablet:ml-0 px-7 pb-[11] pt-[17] box-border rounded-[8] ml-3"
          }
          style={{ background: "rgba(138, 159, 196, 0.3)" }}
        >
          <span
            className={
              "max-tablet:tracking-[-0.018em] max-tablet:leading-[24px] max-tablet:text-[18px] text-[24px] leading-[130%] tracking-[-0.015em] font-display"
            }
          >
            #2GISAwards
          </span>
        </div>
      </div>
    </div>
  );
};
