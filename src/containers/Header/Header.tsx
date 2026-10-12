import { useState } from 'react';
import clsx from 'clsx';
import logo from '@/assets/logo-bookmark.svg';
import hamburger from '@/assets/icon-hamburger.svg';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { LINKS } from '@/data/navigation.data';
import { MobileNavigation } from './components/MobileNavigation';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <header className={styles['header']}>
      <div
        className={clsx(styles['nav-mobile'], {
          [styles['nav-mobile--open']]: isMobileNavigationOpen,
        })}
      >
        <Icon src={logo} alt="Logo" />
        <Icon
          src={hamburger}
          alt="Hamburger"
          className={styles['hamburger']}
          onClick={() => setIsMobileNavigationOpen(true)}
        />
      </div>
      <nav className={clsx(styles['nav-desktop'])}>
        <Icon src={logo} alt="Logo" />
        <ul className={styles['nav-list']}>
          {LINKS.map(({ href, label }) => (
            <li key={href} className={styles['nav-list__item']}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li className={styles['nav-list__item']}>
            <Button variant="danger">LOGIN</Button>
          </li>
        </ul>
      </nav>
      <MobileNavigation
        isOpen={isMobileNavigationOpen}
        onClose={() => setIsMobileNavigationOpen(false)}
      />
    </header>
  );
};
