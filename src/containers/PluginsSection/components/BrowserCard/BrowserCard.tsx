import dots from '@/assets/bg-dots.svg';
import type { BrowserData } from '../../browsers.data';
import { Button } from '@/components/Button';
import styles from './BrowserCard.module.scss';

type BrowserCardProps = {} & BrowserData;

export const BrowserCard = ({ name, logoSrc, minVersion }: BrowserCardProps) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__info']}>
        <img src={logoSrc} alt="Logo of {name} browser" className={styles['card__logo']} />
        <h3>Add to {name}</h3>
        <p>Minimum version {minVersion}</p>
      </div>
      <img src={dots} alt="" className={styles['card__separator']} />
      <div className={styles['card__footer']}>
        <Button>Add & Install Extension</Button>
      </div>
    </div>
  );
};
