import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={"pt-[108]"}>
      <Link href={"/"} className={"block w-fit mx-auto"}>
        <Image
          src={`${ICONS_PATH}/2gis-header.png`}
          alt={"2GIS"}
          width={205}
          height={60}
        />
      </Link>
      <div className={"pt-12"}></div>
    </footer>
  );
};
