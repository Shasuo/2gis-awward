import { useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<HTMLDivElement>,
  onClickOutside: () => void,
) {
  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;
