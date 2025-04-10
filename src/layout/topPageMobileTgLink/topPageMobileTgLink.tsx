import Image from "next/image";
import { IMAGES_PATH } from "@/components/paths/paths";
import Link from "next/link";

export const TopPageMobileTgLink = ({ gold }: { gold?: boolean }) => {
  return (
    <Link
      href={"https://t.me/awards2GIS_bot"}
      className={
        "max-tablet:block hidden rounded-[8px] backdrop-blur-[14px] max-w-[344px] mx-auto box-border p-3 relative"
      }
      style={{ backgroundColor: gold ? "#AB844C" : "rgba(138, 159, 196, 0.2)" }}
      target={"_blank"}
    >
      <p
        className={"text-[12px] leading-[150%] tracking-[-0.01em] max-w-[219]"}
      >
        Скачивайте материалы в несколько кликов через бота в телеграмм
      </p>
      <Image
        src={`${IMAGES_PATH}/TGMobileTop.png`}
        alt={"Telegram"}
        width={63}
        height={53}
        className={"absolute top-[4px] right-[20px]"}
      />
    </Link>
  );
};
