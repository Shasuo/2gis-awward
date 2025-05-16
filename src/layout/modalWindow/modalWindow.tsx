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
  const popupRef = useRef<HTMLDivElement>(null);
  //@ts-ignore
  useClickOutside(popupRef, () => setMainModalState(null));

  if (modalName === mainModalState) {
    return (
      <section
        style={{
          display: "flex",
          background: "rgba(48, 68, 102, 0.8)",
        }}
        className={
          "fixed left-0 top-0 w-full h-[100vh] justify-center z-[100] overflow-auto"
        }
      >
        <div className={"z-50 h-fit pb-10"} ref={popupRef}>
          {children}
        </div>
      </section>
    );
  }
};
