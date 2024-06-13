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
  return (
    <form>
      <div className={cn(styles.radioGroupWrapper, null, className)}>
        <div className={styles.flex}>
          <input
            className={cn(
              styles.radioBase,
              { [styles.cursor]: !disabled },
              className
            )}
            id={'true'}
            name={id}
            checked={value === 'true'}
            value={'true'}
            disabled={disabled}
            {...props}
          />
          <label
            className={cn(styles.radioBaseLabel, {
              [styles.cursor]: !disabled,
            })}
            htmlFor={'true'}
          >
            True
          </label>
        </div>
        <div className={styles.flex}>
          <input
            className={cn(
              styles.radioBase,
              { [styles.cursor]: !disabled },
              className
            )}
            id={'false'}
            name={id}
            checked={value === 'false'}
            value={'false'}
            disabled={disabled}
            {...props}
          />
          <label
            className={cn(styles.radioBaseLabel, {
              [styles.cursor]: !disabled,
            })}
            htmlFor={'false'}
          >
            False
          </label>
        </div>
      </div>
    </form>
  );
};
