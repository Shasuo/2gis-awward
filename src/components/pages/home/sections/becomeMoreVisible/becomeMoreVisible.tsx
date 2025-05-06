import { ICONS_PATH, IMAGES_PATH } from "@/components/paths/paths";
import Image from "next/image";
import Link from "next/link";
import { SliderDownloadMaterials } from "@/components/reused/sliderDownloadMaterials/sliderDownloadMaterials";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";
import { metrika } from "@/components/scripts/metrika";
import styles from "./becomeMoreVisibile.module.css";

export const BecomeMoreVisible = () => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <section className={"max-tablet:mt-[80] mt-[92]"}>
      <div className={"max-tablet:ml-[39px]"}>
        <div
          className={"px-[15] py-2 rounded-[12px] w-fit text-white]"}
          style={{ border: "1px solid white" }}
        >
          <span
            className={
              "max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-base leading-6 tracking-[-0.018em]"
            }
          >
            {language ? <>Шаг 3</> : <>3-қадам</>}
          </span>
        </div>
        <h2
          className={
            "max-tablet:max-w-[282px] max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:text-[30px] max-tablet:mt-8 text-[54px] leading-[92%] tracking-[-0.02em] font-display mt-9"
          }
        >
          {language ? (
            <>Станьте заметнее в городе</>
          ) : (
            <>Қалада ерекшеленіңіз</>
          )}
        </h2>
      </div>

      <SliderDownloadMaterials />

      <Link
        href={"https://t.me/awards2GIS_bot"}
        className={`hover:bg-[#3D4862] active:bg-[#3D4862] arrowImageBlock_HOVER max-tablet:h-[329px] max-tablet:bg-[#AB844C] max-tablet:mx-auto max-tablet:max-w-[344px] max-tablet:mt-2 mt-[27] rounded-[16] p-12 pb-[101] box-border bg-[#364464] relative overflow-hidden block ${styles.tgHover}`}
        target={"_blank"}
        onClick={() => metrika("tg_bot")}
      >
        <h3
          className={
            "max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:text-[30px] max-tablet:text-center text-[54px] leading-[92%] tracking-[-0.02em] font-display"
          }
        >
          Чат-бот
        </h3>
        <p
          className={
            "max-tablet:text-[14px] max-tablet:max-w-[220px] max-tablet:mx-auto max-tablet:mt-3 max-tablet:text-center max-w-[452px] text-[24px] leading-[130%] tracking-[-0.015em] font-display mt-6 opacity-80"
          }
        >
          {language ? (
            <>
              Скачивайте материалы в&nbsp;несколько кликов через бота
              в&nbsp;телеграмм
            </>
          ) : (
            <>Материалдарды Телеграмдағы бот арқылы тез жүктеп алыңыз</>
          )}
        </p>

        <div
          className={
            "max-tablet:rounded-[8] max-tablet:w-[24] max-tablet:h-[24] w-10 h-10 flex items-center justify-center rounded-[12px] box-border arrowImageBlock max-tablet:hidden absolute right-12 top-12"
          }
          style={{ border: "1px solid white" }}
        >
          <img
            src={`${ICONS_PATH}/link_arrow.svg`}
            alt={"Перейти"}
            className={"max-tablet:w-2 max-tablet:h-2"}
          />
        </div>
        <Image
          src={`${IMAGES_PATH}/bigTG.webp`}
          alt={"Telegram"}
          width={495}
          height={237}
          className={`max-tablet:max-w-[344px] max-tablet:w-full max-tablet:left-0 max-tablet:right-[unset] absolute right-[90] bottom-0 ${styles.image}`}
        />
      </Link>
    </section>
  );
};
