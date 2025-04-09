import React, { useRef } from "react";
import { mainModalAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";
import useClickOutside from "@/components/scripts/useClickOutside";

export const ModalWindow = ({
  children,
  modalName,
}: {
  children: React.ReactNode;
  modalName: string;
}) => {
  const [mainModalState, setMainModalState] = useAtom(mainModalAtom);

  //@ts-ignore
  const dropdownRef = useRef<HTMLDivElement>(null);
  //@ts-ignore
  useClickOutside(dropdownRef, () => setMainModalState(null));
  return (
    <section
      style={{
        display: modalName === mainModalState ? "flex" : "none",
        background: "rgba(48, 68, 102, 0.8)",
      }}
      className={
        "fixed left-0 top-0 w-full h-[100vh] justify-center z-[100] overflow-auto"
      }
    >
      <div className={"z-50 h-fit pb-10"} ref={dropdownRef}>
        {children}
      </div>
    </section>
  );
};
