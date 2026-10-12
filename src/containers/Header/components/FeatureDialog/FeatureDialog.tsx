import { clsx } from 'clsx';
import { Feature } from '@/components/Feature/Feature';
import { Icon } from '@/components/Icon';
import { FEATURES } from '@/data/features.data';
import styles from './FeatureDialog.module.scss';

const feature = FEATURES[1];

type FeatureDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FeatureDialog = ({ isOpen, onClose }: FeatureDialogProps) => {
  return (
    <div
      className={clsx(styles['dialog'], {
        [styles['dialog--open']]: isOpen,
      })}
    >
      <div className={styles['dialog__head-bar']}>
        <Icon name="close" className={styles['dialog__close-icon']} onClick={onClose} />
      </div>
      <div className={styles['dialog__content']}>
        <Feature {...feature} />
      </div>
    </div>
  );
};
