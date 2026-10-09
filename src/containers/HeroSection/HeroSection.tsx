import { Button } from '@/components/Button';
import heroImg from '@/assets/illustration-hero.svg';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__image']}>
        <img src={heroImg} alt="" className={styles['hero__img']} />
        <div className={styles['hero__blob']}></div>
      </div>
      <div className={styles['hero__text']}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it for free.
        </p>
        <div className={styles['hero__buttons']}>
          <Button variant="primary">Get it on Chrome</Button>
          <Button variant="secondary">Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
};
