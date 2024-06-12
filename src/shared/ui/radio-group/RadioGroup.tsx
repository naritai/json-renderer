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
  ...props
}: RadioGroupProps) => {
  return (
    <div className={cn('radio_group_wrapper', null, className)}>
      <div className="flex">
        <input
          className={cn('radio_base', null, className)}
          id="true"
          name={id}
          checked={value === 'true'}
          value={'true'}
          {...props}
        />
        <label className="radio_base__label" htmlFor="true">
          True
        </label>
      </div>
      <div className="flex">
        <input
          className={cn('radio_base', null, className)}
          id="false"
          name={id}
          checked={value === 'false'}
          value={'false'}
          {...props}
        />
        <label className="radio_base__label" htmlFor="false">
          False
        </label>
      </div>
    </div>
  );
};
