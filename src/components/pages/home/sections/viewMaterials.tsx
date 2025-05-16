import Link from "next/link";
import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";

export const ViewMaterials = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section className={"max-tablet:mt-[80px] mt-[140px] overflow-hidden"}>
      <div
        className={
          "overflow-hidden max-tablet:h-[890px] max-tablet:max-w-[375px] max-tablet:pb-[52] max-tablet:pt-[60] max-tablet:px-[39px] rounded-[16px] bg-[#AB844C] p-12 pb-[77] w-full box-border relative max-w-[1128px] mx-auto"
        }
      >
        <div>
          <div className={"bg-[#0C132D] px-[15] py-2 rounded-[12px] w-fit"}>
            <span
              className={
                "max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-base leading-6 tracking-[-0.018em]"
              }
            >
              {language ? <>Шаг 1</> : <>1-қадам</>}
            </span>
          </div>
          <div className={"font-display mt-8"}>
            <h2
              className={
                "max-tablet:max-w-[282px] max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:text-[30px] text-[54px] leading-[92%] tracking-[-0.02em] max-w-[600px]"
              }
            >
              {language ? (
                <>Расскажите о&nbsp;своей победе прямо сейчас</>
              ) : (
                <>Жеңісіңіз туралы ақпаратпен дәл қазір бөлісіңіз </>
              )}
            </h2>
            <p
              className={
                "max-tablet:max-w-[282px] max-tablet:tracking-[0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-[24px] leading-[130%] tracking-[-0.015em] max-w-[462px] font-display mt-6"
              }
            >
              {language ? (
                <>
                  Мы подготовили для вас набор персонализированных визуалов
                  и&nbsp;текстов для Ваших социальных сетей
                </>
              ) : (
                <>
                  Жекелендірілген ашықхаттар мен дайын мәтіндерді пайдаланыңыз.
                </>
              )}
            </p>
          </div>
          <Link
            href={"/materials"}
            className={
              "hover:bg-white active:bg-white hover:text-[#354257] active:text-[#354257] px-[38] py-[18] rounded-[8] box-border w-fit block mt-[46] relative z-10"
            }
            style={{ border: "1px solid white" }}
            onClick={() => metrika("view_materials")}
          >
            <span className={"text-base leading-6 tracking-[-0.018em]"}>
              {language ? <>Смотреть материалы</> : <>Материалдарды қарау</>}
            </span>
          </Link>
        </div>
        <Image
          src={`${IMAGES_PATH}/${language ? "awardWinner.png" : "awardWinner_KZ.png"}`}
          alt={"Победитель Премии"}
          width={672}
          height={718}
          className={
            "max-tablet:left-[-90px] max-tablet:right-[unset] max-tablet:top-[-45] max-tablet:min-w-[489] max-tablet:min-h-[483] max-tablet:relative absolute right-[-84] top-[-103]"
          }
        />
      </div>
    </section>
  );
};
