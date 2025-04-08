import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";

export const ViewMaterials = () => {
  return (
    <section
      className={"max-tablet:overflow-hidden max-tablet:mt-[80px] mt-[140px]"}
    >
      <div
        className={
          "max-tablet:max-w-[375px] max-tablet:pb-[52] max-tablet:pt-[60] max-tablet:px-[39px] rounded-[16px] bg-[#AB844C] p-12 pb-[77] w-full box-border relative max-w-[1128px] mx-auto"
        }
      >
        <div>
          <div className={"bg-[#0C132D] px-[15] py-2 rounded-[12px] w-fit"}>
            <span
              className={
                "max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-base leading-6 tracking-[-0.018em]"
              }
            >
              Шаг 1
            </span>
          </div>
          <div className={"font-display mt-8"}>
            <h2
              className={
                "max-tablet:max-w-[282px] max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:text-[30px] text-[54px] leading-[92%] tracking-[-0.02em] max-w-[600px]"
              }
            >
              Расскажите о своей победе прямо сейчас
            </h2>
            <p
              className={
                "max-tablet:max-w-[282px] max-tablet:tracking-[0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-[24px] leading-[130%] tracking-[-0.015em] max-w-[462px] font-display mt-6"
              }
            >
              Мы подготовили для вас набор персонализированных визуалов
              и&nbsp;текстов для Ваших социальных сетей
            </p>
          </div>
          <Link
            href={"/personalized"}
            className={
              "px-[38] py-[18] rounded-[8] box-border w-fit block mt-[46]"
            }
            style={{ border: "1px solid white" }}
          >
            <span className={"text-base leading-6 tracking-[-0.018em]"}>
              Смотреть материалы
            </span>
          </Link>
        </div>
        <Image
          src={`${IMAGES_PATH}/awardWinner.webp`}
          alt={"Победитель Премии"}
          width={568}
          height={537}
          className={
            "max-tablet:left-[-90px] max-tablet:right-[unset] max-tablet:top-0 max-tablet:min-w-[489] max-tablet:min-h-[483] max-tablet:relative absolute right-[-56] top-[-31]"
          }
        />
      </div>
    </section>
  );
};
