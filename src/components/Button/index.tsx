import { ButtonHTMLAttributes } from 'react';
import { DefaultButton } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <DefaultButton 
      className={`button ${isOutlined && 'outlined'}`} 
      {...props} />
  );
}