import { BROWSERS } from './browsers.data';
import { BrowserCard } from './components/BrowserCard';
import styles from './PluginsSection.module.scss';

export const PluginsSection = () => {
  return (
    <section className={styles['plugins']}>
      <div className={styles['plugins__wrapper']}>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
          you’d like us to prioritize.
        </p>
      </div>
      <div className={styles['plugins__list']}>
        {BROWSERS.map((browser) => (
          <div key={browser.name} className={styles['plugins__card']}>
            <BrowserCard {...browser} />
          </div>
        ))}
      </div>
    </section>
  );
};
