import { Button } from '@/components/Button';
import styles from './Feature.module.scss';

type FeatureProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export const Feature = ({ imageSrc, title, description }: FeatureProps) => {
  return (
    <div className={styles['feature']}>
      <div className={styles['feature__image']}>
        <img src={imageSrc} alt="" className={styles['feature__img']} />
        <div className={styles['feature__blob']}></div>
      </div>
      <div className={styles['feature__text']}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button className={styles['feature__more-info-btn']}>More info</Button>
      </div>
    </div>
  );
};
