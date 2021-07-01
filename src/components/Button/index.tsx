import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  );
}
