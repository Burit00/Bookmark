import { animated, useTransition } from 'react-spring';
import { Feature } from '@/components/Feature';
import { Icon } from '@/components/Icon';
import { FEATURES } from '@/data/features.data';
import styles from './FeatureDialog.module.scss';

const feature = FEATURES[1];

type FeatureDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FeatureDialog = ({ isOpen, onClose }: FeatureDialogProps) => {
  const dialogTransition = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 200 },
  });

  return (
    <>
      {dialogTransition((dialogTransitionStyle, item) =>
        item ? (
          <div className={styles['dialog-overlay']}>
            <animated.div style={dialogTransitionStyle} className={styles['dialog']}>
              <div className={styles['dialog__head-bar']}>
                <Icon name="close" className={styles['dialog__close-icon']} onClick={onClose} />
              </div>
              <div className={styles['dialog__content']}>
                <Feature {...feature} />
              </div>
            </animated.div>
          </div>
        ) : null,
      )}
    </>
  );
};
