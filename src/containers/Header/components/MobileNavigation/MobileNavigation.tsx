import { clsx } from 'clsx';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import logo from '@/assets/logo-bookmark-white.svg';
import close from '@/assets/icon-close.svg';
import twitter from '@/assets/icon-twitter.svg';
import facebook from '@/assets/icon-facebook.svg';
import styles from './MobileNavigation.module.scss';

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  { href: '#features', label: 'FEATURES' },
  { href: '#pricing', label: 'PRICING' },
  { href: '#contact', label: 'CONTACT' },
];

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
          <Icon src={logo} alt="Bookmark Logo" className={styles['mobile-nav__logo']} />
          <Icon src={close} alt="Close" onClick={onClose} />
        </div>
        <ul className={styles['mobile-nav__list']}>
          {links.map((link) => (
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
        <Icon src={facebook} alt="Facebook" />
        <Icon src={twitter} alt="Twitter" />
      </div>
    </nav>
  );
};
