import { TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';
import cn from 'classnames';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id?: string;
  className?: string;
};

export const Textarea = ({ className, disabled, ...props }: TextareaProps) => {
  return (
    <div className={cn(styles.textareaWrapper, null, className)}>
      <textarea
        className={cn(
          styles.textareaBase,
          { [styles.fixdimensions]: disabled },
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
