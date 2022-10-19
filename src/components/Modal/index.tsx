import { ReactNode, useEffect, useRef, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { ButtonGroup, CancelButton, ModalContainer, ProceedButton } from './styles';

interface ModalProps {
  title?: string;
  isOpened: boolean;
  onProceed?: () => void;
  onClose: () => void;
  children: ReactNode;
  closeButtonText?: string;
  proceedButtonText?: string;
  showProceedButton?: boolean;
}
export function Modal({
  children,
  isOpened,
  onClose,
  onProceed,
  title,
  closeButtonText,
  proceedButtonText,
  showProceedButton = false
}: ModalProps) {

  const ref: any = useRef(null);
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  useEffect(() => {
    const modalElementRef = ref.current;

    if (isOpened) {
      modalElementRef.showModal();
      document.body.classList.add('modal-open');
    } else {
      modalElementRef.close();
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    if (onProceed) {
      onProceed()
    }
    onClose();
  };

  const preventAutoClose = (event: MouseEvent) => event.stopPropagation;

  return (
    <ModalContainer ref={ref} onCancel={onClose} onClick={onClose} style={{ display: isOpened ? 'flex' : 'none' }}>
      <div onClick={preventAutoClose}>
        <h3>{title}</h3>
        {children}
        <ButtonGroup>
          <CancelButton onClick={onClose}>{closeButtonText ?? 'Cancel'}</CancelButton>
          {showProceedButton && <ProceedButton onClick={proceedAndClose}>{proceedButtonText ?? 'Proceed'}</ProceedButton>}
        </ButtonGroup>
      </div>
    </ModalContainer>
  )
}