import { clsx } from 'clsx';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { LINKS } from '@/data/navigation.data';
import logo from '@/assets/logo-bookmark-white.svg';
import styles from './MobileNavigation.module.scss';

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  return (
    <nav
      inert={!isOpen}
      aria-hidden={!isOpen}
      className={clsx(styles['mobile-nav'], {
        [styles['mobile-nav--opened']]: isOpen,
      })}
    >
      <div>
        <div className={styles['mobile-nav__header']}>
          <img src={logo} alt="Bookmark Logo" className={styles['mobile-nav__logo']} />
          <Icon name="close" onClick={onClose} />
        </div>
        <ul className={styles['mobile-nav__list']}>
          {LINKS.map((link) => (
            <li className={styles['mobile-nav__item']} key={link.href}>
              <a href={link.href} onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles['mobile-nav__item']}>
            <Button variant="outline" onClick={onClose} className={styles['mobile-nav__login-btn']}>
              LOGIN
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles['mobile-nav__footer']}>
        <Icon name="facebook" />
        <Icon name="twitter" />
      </div>
    </nav>
  );
};
