'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog
        as="div"
        onClose={onClose}
        className="fixed inset-0 flex items-center z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 opacity-60 transition-opacity"></div>
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-100 shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-custom">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
