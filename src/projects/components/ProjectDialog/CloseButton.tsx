import cc from "classcat";
import type { VFC } from "react";
import { CgClose } from "react-icons/cg";

interface CloseButtonProps {
  onClose: () => any;
}

export const CloseButton: VFC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button
      className={cc([
        "z-20 fixed bottom-4 right-1/2 transform translate-x-1/2 -translate-y-1/2",
        "sm:absolute sm:top-0 sm:right-4 sm:w-16",
        "w-32 h-12 rounded-xl",
        "bg-gray-100 dark:bg-gray-700 border-2 border-gray-600 dark:border-gray-300",
        "flex gap-x-2 items-center justify-center",
        "transition transform shadow-lg active:shadow-none active:scale-95 cursor-pointer select-none"
      ])}
      onClick={onClose}
    >
      <CgClose /> <span className="sm:hidden">Close</span>
    </button>
  );
};
