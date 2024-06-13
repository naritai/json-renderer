import { InputHTMLAttributes } from 'react';
import styles from './RadioGroup.module.scss';
import cn from 'classnames';

type RadioGroupProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  className?: string;
};

export const RadioGroup = ({
  className,
  id,
  value,
  disabled,
  ...props
}: RadioGroupProps) => {
  const id1 = id + 1;
  const id2 = id + 2;

  const content = (
    <div className={cn(styles.radioGroupWrapper, null, className)}>
      <div className={styles.flex}>
        <input
          className={cn(styles.radioBase, { [styles.cursor]: !disabled }, className)}
          id={id1}
          checked={value === 'true'}
          value={'true'}
          disabled={disabled}
          {...props}
        />
        <label
          className={cn(styles.radioBaseLabel, {
            [styles.cursor]: !disabled,
          })}
          htmlFor={id1}
        >
          True
        </label>
      </div>
      <div className={styles.flex}>
        <input
          className={cn(styles.radioBase, { [styles.cursor]: !disabled }, className)}
          id={id2}
          checked={value === 'false'}
          value={'false'}
          disabled={disabled}
          {...props}
        />
        <label
          className={cn(styles.radioBaseLabel, {
            [styles.cursor]: !disabled,
          })}
          htmlFor={id2}
        >
          False
        </label>
      </div>
    </div>
  );

  // wrap in form to distinguish from radio btns with same name on the page
  // when we in edit mode, we shouldn't nest forms

  return disabled ? <form>{content}</form> : <>{content}</>;
};
