import { TextareaHTMLAttributes } from 'react';
import cn from 'classnames';
import './Textarea.css';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id?: string;
  className?: string;
};

export const Textarea = ({ className, disabled, ...props }: TextareaProps) => {
  return (
    <div className={cn('textarea_wrapper', null, className)}>
      <textarea
        className={cn(
          'textarea_base',
          { ['fixdimensions']: disabled },
          className
        )}
        rows={2}
        cols={33}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
