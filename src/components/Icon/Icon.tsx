import { clsx } from 'clsx';
import styles from './Icon.module.scss';

type IconProps = {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
};

export const Icon = ({ src, alt, className, onClick }: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        styles['icon'],
        {
          [styles['icon--action']]: onClick,
        },
        className,
      )}
      onClick={onClick}
    />
  );
};
