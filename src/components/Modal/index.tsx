import { ReactNode, useEffect, useRef, MouseEvent } from 'react';
import { ButtonGroup } from '../../pages/Checkout/styles';
import { ModalContainer } from './styles';
// import { createPortal } from 'react-dom';

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
  showProceedButton = true
}: ModalProps) {

  const ref: any = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add('modal-open');
    } else {
      ref.current?.close();
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    if (onProceed) onProceed()
    onClose();
  };

  const preventAutoClose = (event: MouseEvent) => event.stopPropagation;

  return (
    <ModalContainer ref={ref} onCancel={onClose} onClick={onClose}>
      <div onClick={preventAutoClose}>
        <h3>{title}</h3>
        {children}
        <ButtonGroup>
          {showProceedButton && <button onClick={proceedAndClose}>{proceedButtonText ?? 'Proceed'}</button>}
          <button onClick={onClose}>{closeButtonText ?? 'Cancel'}</button>
        </ButtonGroup>
      </div>
    </ModalContainer>
  )
}