import { DetailedHTMLProps, HTMLAttributes, JSX } from "react";
import { Header } from "@/layout/header/header";
import { TopPageMobileTgLink } from "@/layout/topPageMobileTgLink/topPageMobileTgLink";
import { AnyQuestionsModal } from "@/layout/modals/anyQuestionsModal";
import { MetaHead } from "@/components/reused/metaHead/metaHead";

export const Layout = ({
  children,
  ...props
}: MainLayoutProps): JSX.Element => {
  return (
    <div {...props}>
      <MetaHead
        title={"Премия 2ГИС 2025"}
        description={
          "Премия 2ГИС  – награда, которую мы вручаем популярным компаниям, получившим по итогам года самые высокие оценки и внимание пользователей 2ГИС."
        }
      />
      <div
        style={{
          background:
            "linear-gradient(to bottom, #293876,#1A2B4D,#121C39, #121C39)",
        }}
        className={"absolute w-full top-0 h-[540px] z-[-1]"}
      />
      <AnyQuestionsModal />

      <Header />
      <TopPageMobileTgLink />

      {children}

      <div
        style={{
          background:
            "linear-gradient(to top, #293876,#1A2B4D,#121C39, #121C39)",
        }}
        className={"absolute w-full bottom-0 h-[540px] z-[-1]"}
      />
    </div>
  );
};

export type MainLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
