import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonVariants = 'outline' | 'danger';

type ButtonProps = {
  variant: ButtonVariants;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Button = ({ variant, className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles['button'],
        {
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
