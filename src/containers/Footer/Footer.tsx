import styles from './Footer.module.scss';
import { Icon } from '@/components/Icon';
import { LINKS } from '@/data/navigation.data';
import logo from '@/assets/logo-bookmark-2.svg';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <img className={styles['footer__logo']} src={logo} alt={'Logo of Bookmark'} />
      <ul className={styles['footer__link-list']}>
        {LINKS.map(({ href, label }) => (
          <li key={href} className={styles['footer__link-item']}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <div className={styles['footer__socials']}>
        <Icon name="facebook" />
        <Icon name="twitter" />
      </div>
    </footer>
  );
};
