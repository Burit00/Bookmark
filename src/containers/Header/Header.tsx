import { useEffect, useState } from 'react';
import clsx from 'clsx';
import logo from '@/assets/logo-bookmark.svg';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { LINKS } from '@/data/navigation.data';
import { MobileNavigation } from './components/MobileNavigation';
import styles from './Header.module.scss';
import { FeatureDialog } from '@/containers/Header/components/FeatureDialog';

const DIALOG_OPEN_DELAY = 30000;

export const Header = () => {
  const [isFeatureDialogOpen, setIsFeatureDialogOpen] = useState(false);
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFeatureDialogOpen(true);
    }, DIALOG_OPEN_DELAY);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <header className={styles['header']} onMouseEnter={() => setIsFeatureDialogOpen(true)}>
        <div
          className={clsx(styles['nav-mobile'], {
            [styles['nav-mobile--open']]: isMobileNavigationOpen,
          })}
        >
          <img src={logo} alt="Logo" />
          <Icon
            name="hamburger"
            className={styles['hamburger']}
            onClick={() => setIsMobileNavigationOpen(true)}
          />
        </div>
        <nav className={clsx(styles['nav-desktop'])}>
          <img src={logo} alt="Logo" />
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
      <FeatureDialog isOpen={isFeatureDialogOpen} onClose={() => setIsFeatureDialogOpen(false)} />
    </>
  );
};
