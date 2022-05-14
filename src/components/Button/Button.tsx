import { IButtonProps } from './types';

import scss from './Button.module.scss';

function Button(props: IButtonProps) {
  const buttonClass = [scss.btn];

  const handleClick = (e: any) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const renderButton = () => (
    <button
      type={props.type === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
      className={buttonClass.join(' ')}
    >
      {props.children}
    </button>
  );

  const renderLink = () => (
    <a
      href={props.to}
      onClick={handleClick}
      className={buttonClass.join(' ')}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );

  if (props.className) buttonClass.push(props.className);

  return props.to ? renderLink() : renderButton();
}

Button.defaultProps = {
  type: 'button',
} as IButtonProps;

export default Button;
