import { DetailedHTMLProps, HTMLAttributes, JSX } from "react";
import { Header } from "@/layout/header/header";
import { Footer } from "@/layout/footer/footer";

export const Layout = ({
  children,
  ...props
}: MainLayoutProps): JSX.Element => {
  return (
    <div {...props}>
      <div
        style={{
          background:
            "linear-gradient(to bottom, #293876,#1A2B4D,#121C39, #121C39)",
        }}
        className={"absolute w-full top-0 h-[540px] z-[-1]"}
      />
      <Header />
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
