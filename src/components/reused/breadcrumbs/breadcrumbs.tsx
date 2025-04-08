import { TextModule } from "@/components/texts/textModule";

export const Breadcrumbs = ({
  mt,
  pageName,
}: {
  mt?: number;
  pageName: string;
}) => {
  return (
    <div
      className={
        "max-tablet:text-[14px] max-tablet:leading-[150%] max-tablet:tracking-[-0.01em] flex max-tablet:ml-9 text-base leading-6 tracking-[-0.018em]"
      }
      style={{ marginTop: mt }}
    >
      <div className={"opacity-60"}>Главная</div>
      <div className={"max-tablet:mx-2 mx-[15px]"}>/</div>
      <div>{pageName}</div>
    </div>
  );
};
