import { InputHTMLAttributes } from 'react';
import cn from 'classnames';

import './InputField.css';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  className?: string;
};

export const InputField = ({ className, type, ...props }: InputFieldProps) => {
  return (
    <div className={cn('input_wrapper', null, className)}>
      <input
        className={cn('input_base', null, className)}
        type={type}
        {...props}
      />
    </div>
  );
};
