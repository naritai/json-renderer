import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick, ...props }: ButtonProps) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <button className={styles.btnBase} onClick={handleClick} {...props}>
      {text}
    </button>
  );
};
