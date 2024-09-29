"use client";
import React, { Fragment } from "react";

import { X } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import IconButton from "@/components/icon-button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {


  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scalse-95"
              enterTo="opacity-100 scale-100 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl rounded-lg overflow-hidden text-left align-middle">
                <div className="relative flex items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute top-4 right-4">
                    <IconButton onClick={onClose} icon={<X size={20} className="text-black font-semibold" />} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
