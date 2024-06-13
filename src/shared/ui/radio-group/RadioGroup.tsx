import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import './RadioGroup.css';

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
      <div className={cn('radio_group_wrapper', null, className)}>
        <div className="flex">
          <input
            className={cn('radio_base', { cursor: !disabled }, className)}
            id={'true'}
            name={id}
            checked={value === 'true'}
            value={'true'}
            disabled={disabled}
            {...props}
          />
          <label
            className={cn('radio_base__label', { cursor: !disabled })}
            htmlFor={'true'}
          >
            True
          </label>
        </div>
        <div className="flex">
          <input
            className={cn('radio_base', { cursor: !disabled }, className)}
            id={'false'}
            name={id}
            checked={value === 'false'}
            value={'false'}
            disabled={disabled}
            {...props}
          />
          <label
            className={cn('radio_base__label', { cursor: !disabled })}
            htmlFor={'false'}
          >
            False
          </label>
        </div>
      </div>
    </form>
  );
};
