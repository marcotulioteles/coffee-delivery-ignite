import { ReactNode, useEffect, useRef } from "react";
import { ModalBackground, ModalContainer } from "./styles";
import { createPortal } from 'react-dom';
import { X } from "phosphor-react";

interface ModalProps {
  isOpen: boolean;
  closeFn: () => void;
  children: ReactNode;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export function Modal({ closeFn, isOpen = false, children }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(isOpen)
  //   if (!isOpen) return;

  //   function listener(event: any) {
  //     if ((modalContainerRef.current as HTMLDivElement).contains(event.target)) {
  //       return;
  //     }
  //     closeFn()
  //   }

  //   window.addEventListener('click', listener)

  //   return () => window.removeEventListener('click', listener);
  // }, [isOpen])

  if (!isOpen) return null;

  return createPortal(
    <ModalBackground>
      <ModalContainer ref={modalContainerRef}>
        <X size={24} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={closeFn} />
        {children}
      </ModalContainer>
    </ModalBackground>,
    modalRoot)
}