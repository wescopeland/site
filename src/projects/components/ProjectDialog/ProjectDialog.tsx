import { Dialog, Transition } from "@headlessui/react";
import cc from "classcat";
import type { VFC } from "react";
import { Fragment } from "react";

import type { ProjectListElement } from "@/projects/models";

import { CloseButton } from "./CloseButton";
import { TechStack } from "./TechStack";

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
  if (project === null) {
    return null;
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
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
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-6 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 sm:scale-100"
            leaveTo="opacity-0 sm:scale-95"
          >
            <div
              className={cc([
                "relative bg-white dark:bg-dark shadow-2xl p-4",
                "max-h-screen overflow-y-auto sm:overflow-y-visible",
                "min-h-[100vh] w-full sm:border-2 border-gray-300 dark:border-gray-400",
                "sm:w-3/4 md:min-w-[748px] md:max-w-[900px] sm:mx-auto sm:min-h-[auto] sm:rounded-lg"
              ])}
            >
              <Dialog.Title className="text-3xl tracking-tight mt-12 sm:mt-0">
                {project.name}
              </Dialog.Title>
              <Dialog.Description className="text-gray-700 dark:text-gray-200">
                {project.description}
              </Dialog.Description>

              <hr className="mt-4" />

              <div className="flex flex-col">
                <div className="flex justify-around w-full py-4 bg-gray-50 dark:bg-gray-900">
                  <a
                    className="focus:outline-none focus-visible:ring-2"
                    href={`https://github.com/${project.githubRepo}`}
                  >
                    Code
                  </a>

                  {project.websiteUrl ? (
                    <a href={project.websiteUrl}>Website</a>
                  ) : (
                    <p className="text-gray-300">Website</p>
                  )}
                </div>

                <hr className="mb-8" />

                {project.techStackItems.length > 0 ? (
                  <TechStack techStackElements={project.techStackItems} />
                ) : null}
              </div>

              <CloseButton onClose={onClose} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
