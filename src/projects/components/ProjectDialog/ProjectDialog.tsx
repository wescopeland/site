import { Dialog, Transition } from "@headlessui/react";
import cc from "classcat";
import type { VFC } from "react";
import { Fragment } from "react";

import type { ProjectListElement } from "@/projects/models";

interface ProjectDialogProps {
  project: ProjectListElement | null;
  isOpen: boolean;
  onClose: () => any;
}

export const ProjectDialog: VFC<ProjectDialogProps> = ({
  project,
  isOpen,
  onClose
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={cc([
                "fixed inset-0 bg-black bg-opacity-30",
                "backdrop-filter backdrop-blur backdrop-saturate-200"
              ])}
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 overflow-hidden"
            enterFrom="opacity-0 translate-y-6 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 sm:scale-100"
            leaveTo="opacity-0 sm:scale-95"
          >
            <div
              className={cc([
                "relative bg-white dark:bg-dark shadow-2xl p-4",
                "h-[100vh] w-full sm:border-2 border-gray-300 dark:border-gray-400",
                "sm:w-1/2 sm:mx-auto sm:h-auto sm:rounded-lg"
              ])}
            >
              <Dialog.Title>{project.name}</Dialog.Title>
              <Dialog.Description>
                Get data from the PlayStation Network.
              </Dialog.Description>

              <p>This is some dialog content!</p>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
