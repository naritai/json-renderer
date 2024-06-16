import { ReactNode, useEffect, useRef } from 'react';
import styles from './ModalDialog.module.scss';

interface DialogProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Dialog({ children, isOpen, onClose }: DialogProps) {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const bodyOverflow = useRef(document.body.style.overflow);

	useEffect(() => {
		if (isOpen) {
			if (dialogRef.current && dialogRef.current.showModal) {
				dialogRef.current?.showModal();
				bodyOverflow.current = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}
		} else {
			if (dialogRef.current && dialogRef.current.close) {
				dialogRef.current.close();
			}
			document.body.style.overflow = bodyOverflow.current;
		}

		return () => {
			document.body.style.overflow = bodyOverflow.current;
		};
	}, [isOpen]);

	const closeDialog = () => {
		dialogRef.current?.close();
		onClose();
	};

	return (
		<dialog
			data-testid="dialog"
			onCancel={closeDialog}
			className={styles.dialog}
			ref={dialogRef}
		>
			{children}
		</dialog>
	);
}
