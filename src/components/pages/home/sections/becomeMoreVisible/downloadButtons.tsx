import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { TextModule } from "@/components/texts/textModule";
/*"rgba(55, 68, 99, 0.7)"*/
export const DownloadButtons = () => {
  return (
    <div className={"flex mt-auto"}>
      <Link
        href={"#"}
        className={"flex items-center box-border py-3 px-6 rounded-[8]"}
        style={{ background: "gray" }}
      >
        <Image
          src={`${ICONS_PATH}/download.svg`}
          alt={"Скачать RU"}
          width={24}
          height={24}
          className={"block"}
        />
        <TextModule
          text={"Скачать RU"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"div"}
          margin_left={12}
        />
      </Link>
      <Link
        href={"#"}
        className={"flex items-center box-border py-3 px-6 rounded-[8] ml-3"}
        style={{ background: "gray" }}
      >
        <Image
          src={`${ICONS_PATH}/download.svg`}
          alt={"Скачать EN"}
          width={24}
          height={24}
          className={"block"}
        />
        <TextModule
          text={"Скачать EN"}
          font_size={16}
          line_height={"24px"}
          letter_spacing={"-0.018em"}
          as={"div"}
          margin_left={12}
        />
      </Link>
    </div>
  );
};
