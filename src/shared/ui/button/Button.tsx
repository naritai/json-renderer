import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export function Button({ text, onClick, type = 'button', ...props }: ButtonProps) {
	const handleClick = () => {
		if (typeof onClick === 'function') {
			onClick();
		}
	};

	return (
		<button type={type} className={styles.btnBase} onClick={handleClick} {...props}>
			{text}
		</button>
	);
}
