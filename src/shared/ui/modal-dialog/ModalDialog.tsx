import { ReactNode, useEffect, useRef } from 'react';
import styles from './ModalDialog.module.scss';

interface DialogProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Dialog = ({ children, isOpen, onClose }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <dialog onCancel={closeDialog} className={styles.dialog} ref={dialogRef}>
      {children}
    </dialog>
  );
};
