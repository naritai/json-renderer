import { ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  onClick?: () => void
}

export const Button = ({ text, onClick, ...props }: ButtonProps) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }
  return (
    <button className="btn_base" onClick={handleClick} {...props}>
      {text}
    </button>
  )
}
