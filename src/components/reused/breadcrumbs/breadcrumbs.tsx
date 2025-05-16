import { TextModule } from "@/components/texts/textModule";
import Link from "next/link";
import { useAtom } from "jotai/index";
import { languageRuAtom } from "@/atoms/atoms";

export const Breadcrumbs = ({
  mt,
  pageName,
}: {
  mt?: number;
  pageName: string;
}) => {
  const language = useAtom(languageRuAtom)[0];
  return (
    <div
      className={
        "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] flex max-tablet:ml-9 text-base leading-6 tracking-[-0.018em]"
      }
      style={{ marginTop: mt }}
    >
      <Link href={"/"} className={"opacity-60"}>
        {language ? "Главная" : "Басты бет"}
      </Link>
      <div className={"max-tablet:mx-2 mx-[15px]"}>/</div>
      <div>{pageName}</div>
    </div>
  );
};
