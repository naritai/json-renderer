import { InputHTMLAttributes } from 'react';
import styles from './InputField.module.scss';
import cn from 'classnames';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  className?: string;
};

export const InputField = ({ className, type, ...props }: InputFieldProps) => {
  return (
    <div className={cn(styles.inputWrapper, null, className)}>
      <input
        className={cn(styles.inputBase, null, className)}
        type={type}
        {...props}
      />
    </div>
  );
};
