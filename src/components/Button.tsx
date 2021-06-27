import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  // eslint-disable-next-line react/button-has-type
  return <button className="button" {...props} />;
}
