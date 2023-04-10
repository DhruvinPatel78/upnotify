import React, { ReactNode } from "react";
interface ModalProps {
  open: boolean;
  children: ReactNode;
}
const Modal = ({ open,  children }: ModalProps) => {
  return (
    open && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-2xl w-128">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-modalWidth bg-white outline-none focus:outline-none p-6">
                {children}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    )
  );
};
export default Modal;
