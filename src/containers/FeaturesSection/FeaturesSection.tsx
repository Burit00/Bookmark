import { useState } from 'react';
import styles from './FeaturesSection.module.scss';
import clsx from 'clsx';
import { Feature } from './components/Feature/Feature';
import { FEATURES } from './features.data';

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0]);

  return (
    <section id="features" className={styles['features']}>
      <div className={styles['features__wrapper']}>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go.
        </p>
        <div className={styles['features__tabs']}>
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              className={clsx(styles['features__tab'], {
                [styles['features__tab--active']]: feature.id === activeFeature.id,
              })}
              onClick={() => setActiveFeature(feature)}
            >
              {feature.label}
            </button>
          ))}
        </div>
      </div>
      <Feature {...activeFeature} />
    </section>
  );
};
