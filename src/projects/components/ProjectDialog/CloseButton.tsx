import cc from "classcat";
import type { FC } from "react";
import { CgClose } from "react-icons/cg";

interface CloseButtonProps {
  onClose: () => any;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button
      aria-label="Close"
      className={cc([
        "z-20 fixed top-4 right-4 transform sm:translate-x-1/2 sm:-translate-y-1/2",
        "sm:absolute sm:top-0 sm:right-4 sm:w-16",
        "w-10 h-10 sm:w-32 sm:h-12 rounded-xl",
        "bg-gray-100 dark:bg-gray-700 border-2 border-gray-600 dark:border-gray-300",
        "flex gap-x-2 items-center justify-center",
        "transition transform shadow-lg active:shadow-none active:scale-95 cursor-pointer select-none"
      ])}
      onClick={onClose}
    >
      <CgClose />
    </button>
  );
};
