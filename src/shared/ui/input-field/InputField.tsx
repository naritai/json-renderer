import { InputHTMLAttributes } from 'react';
import styles from './InputField.module.scss';
import cn from 'classnames';

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  className?: string;
};

export function InputField({ className, ...props }: InputFieldProps) {
	return (
		<div className={cn(styles.inputWrapper, null, className)}>
			<input className={cn(styles.inputBase, null, className)} {...props} />
		</div>
	);
}
