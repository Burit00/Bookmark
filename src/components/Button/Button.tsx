import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'danger';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariants;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Button = ({
  type = 'button',
  variant = 'primary',
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        styles['button'],
        {
          [styles['button--primary']]: variant === 'primary',
          [styles['button--secondary']]: variant === 'secondary',
          [styles['button--outline']]: variant === 'outline',
          [styles['button--danger']]: variant === 'danger',
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
