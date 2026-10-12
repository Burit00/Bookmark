import styles from './Footer.module.scss';
import { Icon } from '@/components/Icon';
import { LINKS } from '@/data/navigation.data';
import logo from '@/assets/logo-bookmark-2.svg';
import facebook from '@/assets/icon-facebook.svg';
import twitter from '@/assets/icon-twitter.svg';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Icon className={styles['footer__logo']} src={logo} alt={'Logo of Bookmark'} />
      <ul className={styles['footer__link-list']}>
        {LINKS.map(({ href, label }) => (
          <li key={href} className={styles['footer__link-item']}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <div className={styles['footer__socials']}>
        <Icon src={facebook} alt="Facebook" />
        <Icon src={twitter} alt="Twitter" />
      </div>
    </footer>
  );
};
